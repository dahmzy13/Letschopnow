/*
  # Create business profiles table

  1. New Tables
    - `business_profiles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `store_name` (text)
      - `store_address` (text)
      - `store_number` (text)
      - `floor_suite` (text, nullable)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `business_profiles` table
    - Add policies for authenticated users to:
      - Read their own business profile
      - Update their own business profile
      - Insert their own business profile
*/

-- Create the business_profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS business_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  store_name text NOT NULL,
  store_address text NOT NULL,
  store_number text NOT NULL,
  floor_suite text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS
ALTER TABLE business_profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Users can read own business profile" ON business_profiles;
    DROP POLICY IF EXISTS "Users can update own business profile" ON business_profiles;
    DROP POLICY IF EXISTS "Users can insert own business profile" ON business_profiles;
EXCEPTION
    WHEN undefined_object THEN
        NULL;
END $$;

-- Create policies
CREATE POLICY "Users can read own business profile"
  ON business_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own business profile"
  ON business_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert own business profile"
  ON business_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);
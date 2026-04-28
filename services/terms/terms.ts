import fs from 'fs-extra';
import path from 'path';


/** 
 * Reads the privacy policy from an MDX file
 * @returns Promise with the parsed privacy data or null if error occurs
 */
export async function readTermsAndConditions(): Promise<string | null> {
  const filePath = path.join(process.cwd(), 'content', 'terms_and_conditions', 'terms.mdx');
  
  try {
    // Read the MDX file as text
    const content = await fs.readFile(filePath, 'utf-8');
    
    return content
  } catch (error) {
    console.error("Error reading Terms and Conditions:", error);
    return null;
  }
}
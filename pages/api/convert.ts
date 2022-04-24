import type { NextApiRequest, NextApiResponse } from 'next'
import AdmZip from 'adm-zip'
import path from 'path'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { file } = req.body
  console.log('./' + file.split('\\')[2]);

  
  extractArchive('./jm.zip');
  res.status(200).send({ name: file })
}

async function extractArchive(file: any) {
  try {
    const zip = new AdmZip(file);
    console.log('Zip ' + zip);
    const outputDir = `${path.parse(file).name}_extracted`;
    console.log('Output dir ' + outputDir);
    
    zip.extractAllTo('./jm.zip', true);
    console.log(`Extracted to "${outputDir}" successfully`);
  } catch (e) {
    console.error(`Something went wrong. ${e}`);
  }
}
import fs from 'node:fs/promises';

async function readGqlFiles() {

  try {

    const files = await fs.readdir(`${import.meta.dirname}/schemas`, 'utf8');

    const gqlFiles = files.filter((file) => file.endsWith('.gql'));

    const fileContents = await Promise.all(
      gqlFiles.map((file) => fs.readFile(`${import.meta.dirname}/schemas/${file}`, 'utf8'))
    );

    return fileContents.join('\n');

  } catch (error) {
    console.error('Error reading .gql files:', error);
  }

}

export default await readGqlFiles();
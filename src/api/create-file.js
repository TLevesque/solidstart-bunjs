export default async function createFile() {
  "use server";
  try {    
    await Bun.write(
        `./newfile.txt`,
        "Hello Bun.js"
    );
  } catch (error) {
    console.error("Error:", error);
  }
}

// Manual Testing
// createFile();
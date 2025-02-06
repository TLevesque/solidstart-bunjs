export default async function createFile() {
  "use server";
  try {    
    await Bun.write(
        `./newfile.txt`,
        "Hello Bun Server Function"
    );
  } catch (error) {
    console.error("Error:", error);
  }
}

// Manual Testing
// createFile();

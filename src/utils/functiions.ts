import { create, mkdir, BaseDirectory, readTextFile } from "@tauri-apps/plugin-fs"

async function saveGame(data: {coin:number, multiplier:number, upgrades: {coffeeMachine: number}}) {
    await mkdir("com.wolfy.wolf-coffee", { 
      baseDir: BaseDirectory.AppData, 
      recursive: true 
    })
   const file =  await create("save.json",  {
        baseDir: BaseDirectory.AppData,
    })
    await file.write(new TextEncoder().encode(JSON.stringify(data)))
    await file.close()
    console.log("Joc salvat!" + JSON.stringify(data))
}

async function loadGame() {
    try {
        const json = await readTextFile("save.json", {
            baseDir: BaseDirectory.AppData,
        })
        const data = JSON.parse(json)
        console.log("Datele jocului încărcate:", data)
        return data
    } catch (err) {
        console.error("Nu s-a putut încărca fișierul:", err)
        return null
    }
}

export { saveGame, loadGame };
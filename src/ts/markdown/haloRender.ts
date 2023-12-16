import {Constants} from "../constants";
import {haloRenderAdapter} from "./adapterRender";

export const haloRender = (element: (HTMLElement | Document) = document, cdn = Constants.CDN) => {
    haloRenderAdapter.getElements(element).forEach((el: Element) => {
        const renderText = el.textContent
        const lines = renderText.split("\n");
        let doc = document.createElement("div")
        let html = ""
        const type = lines[0]
        if (type.startsWith("tips")) {
            doc.className = lines[0].replace(":","-")
            lines.forEach((line: string, index: number) => {
                if (index === 0) return
                if (line) html += `<div>${line}</div>`
            })
        } else if (type.startsWith("expand")) {
        }
        doc.innerHTML = html
        el.parentElement.insertBefore(doc, el)
        el.remove()
    })
}

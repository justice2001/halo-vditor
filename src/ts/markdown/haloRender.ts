import {Constants} from "../constants";
import {haloRenderAdapter} from "./adapterRender";
import {addScript} from "../util/addScript";
import {addStyle} from "../util/addStyle";

declare const HaloJs: {
    renderHalo: (content: string) => string
}

export const haloRender = (element: (HTMLElement | Document) = document, cdn = Constants.CDN) => {
    const haloElement = haloRenderAdapter.getElements(element)
    if (haloElement.length > 0) {
        addStyle(`${cdn}/dist/js/halo/index.css`, "VditorHaloRenderStyle")
        addScript(`${cdn}/dist/js/halo/index.js`, "VditorHaloRender").then(() => {
            haloElement.forEach(el => {
                // 修补code外框
                el.outerHTML = HaloJs.renderHalo(haloRenderAdapter.getCode(el))
            })
        })
    }
}

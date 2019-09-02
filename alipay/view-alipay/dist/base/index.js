function getCtx(selector) {
    const pages = getCurrentPages();
    const ctx = pages[pages.length - 1];
    console.log(ctx);
    const componentCtx = ctx.selectComponent(selector);
    console.log(componentCtx);

    if (!componentCtx) {
        console.error("无法找到对应的组件，请按文档说明使用组件");
        return null;
    }

    return componentCtx;
}

function Toast(options) {
    console.log(options);
    const { selector = "#toast" } = options;
    const ctx = getCtx(selector);
    ctx.handleShow(options);
}

Toast.hide = function(selector = "#toast") {
    const ctx = getCtx(selector);
    ctx.handleHide();
};

function Message(options) {
    console.log(options);
    const { selector = "#message" } = options;
    console.log(selector);
    const ctx = getCtx(selector);
    ctx.handleShow(options);
}

module.exports = {
    $Toast: Toast,
    $Message: Message
};

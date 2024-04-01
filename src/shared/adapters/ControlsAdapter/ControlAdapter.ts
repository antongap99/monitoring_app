interface IClassComponentAdapter {
    component: JSX.Element | null
}

export class classComponentAdapter extends HTMLElement implements IClassComponentAdapter {
    component: JSX.Element | null = null;

    constructor(component: JSX.Element) {
        super();
        this.render();
        this.component = component;
    }

    render() {
        return this.component;
    }
}

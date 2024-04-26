import { createApplication } from '@angular/platform-browser'
import { createCustomElement } from '@angular/elements'

import { CustomElementComponent } from './app/custom-element/custom-element.component'

(async () => {
  const app = createApplication()
  const CustomElement = createCustomElement(CustomElementComponent, {
    injector: (await app).injector
  });

  customElements.define('custom-element', CustomElement);

})()

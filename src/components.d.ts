/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AppHome {
        "clientID": string;
        "customerAuthURL": string;
        "mailPlaceHolder": string;
        "passwordPlaceHolder": string;
        "sessionURL": string;
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface SsFormInput {
        "initialValue": string;
        "inputName": string;
        "placeHolder": string;
        "ssInputChange": (inpValue: string) => string;
        "type": string;
    }
    interface SsLogin {
        "init": (sessionData: any) => Promise<any>;
        "mailPlaceHolder": string;
        "passwordPlaceHolder": string;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLSsFormInputElement extends Components.SsFormInput, HTMLStencilElement {
    }
    var HTMLSsFormInputElement: {
        prototype: HTMLSsFormInputElement;
        new (): HTMLSsFormInputElement;
    };
    interface HTMLSsLoginElement extends Components.SsLogin, HTMLStencilElement {
    }
    var HTMLSsLoginElement: {
        prototype: HTMLSsLoginElement;
        new (): HTMLSsLoginElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "ss-form-input": HTMLSsFormInputElement;
        "ss-login": HTMLSsLoginElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
        "clientID"?: string;
        "customerAuthURL"?: string;
        "mailPlaceHolder"?: string;
        "passwordPlaceHolder"?: string;
        "sessionURL"?: string;
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface SsFormInput {
        "initialValue"?: string;
        "inputName"?: string;
        "placeHolder"?: string;
        "ssInputChange"?: (inpValue: string) => string;
        "type"?: string;
    }
    interface SsLogin {
        "mailPlaceHolder"?: string;
        "passwordPlaceHolder"?: string;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "ss-form-input": SsFormInput;
        "ss-login": SsLogin;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "ss-form-input": LocalJSX.SsFormInput & JSXBase.HTMLAttributes<HTMLSsFormInputElement>;
            "ss-login": LocalJSX.SsLogin & JSXBase.HTMLAttributes<HTMLSsLoginElement>;
        }
    }
}

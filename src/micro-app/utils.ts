export const appName = 'app1';

const _key = (appName: string, event: string): string => `${appName}/${event}`;

export const dispatchMicroAppEvent = async (event: any, agrs: any) => {
    await sessionStorage.setItem(_key(appName, event), JSON.stringify(agrs));
    await window.dispatchEvent(new Event(_key(appName, event)));
};

export const addMicroAppsEventListener = (appName: string, event: string, handleEvent: any) => {
    window.addEventListener(_key(appName, event), handleEvent);
};
  
export const removeMicroAppsEventListener = (appName: string, event: string, handleEvent: any) => {
    window.removeEventListener(_key(appName, event), handleEvent);
};

export const getAgrsOfMicroAppsEvent: any = (appName: string, event: string) => {
    const str = sessionStorage.getItem(_key(appName, event));
    if (str !== null) {
        const tmp = JSON.parse(str);
        sessionStorage.removeItem(_key(appName, event));
        return tmp;    
    } else return null;
};
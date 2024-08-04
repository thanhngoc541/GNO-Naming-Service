export { };

declare global {
    interface Window {
        adena?: {
            AddEstablish: (arg: string) => Promise<void>;
            GetAccount: () => Promise<any>;
        };
    }
}
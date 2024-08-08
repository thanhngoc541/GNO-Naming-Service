export { };

declare global {
    interface Window {
        adena?: {
            AddEstablish: (arg: string) => Promise<void>;
            GetAccount: () => Promise<any>;
            DoContract: (params: any) => Promise<any>;
            Sign: (params: any) => Promise<any>;
        };
    }
}
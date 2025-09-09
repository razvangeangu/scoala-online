import messages from "./messages/en.json";

declare module "next-intl" {
    interface AppConfig {
        Locale: "en" | "ro";
        Messages: typeof messages;
    }
}

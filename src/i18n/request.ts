import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
    const locale = ((await cookies()).get("NEXT_LOCALE")?.value || "en") as "en" | "ro";

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});

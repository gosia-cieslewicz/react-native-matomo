declare module "react-native-matomo" {
    namespace BNFMatomo {
        export function initTracker(apiUrl: string, siteId: number);

        export function setUserId(userId: string);

        export function setCustomDimension(id: number, value: string);

        export function setAppOptOut(isOptedOut: boolean);

        export function trackAppDownload(path: string, title: string);

        export function trackGoal(goalId: string, revenue: any);

        export function trackEvent(category: string, action: string, name: string, value: number, url?: string);

        export function trackCampaign(name: string, keyword: string);

        export function trackScreen(screen: string, title: string);

        export function trackContentImpression(name: string, piece: string, target: string);

        export function trackContentInteraction(name: string, interaction: string, piece: string, target: string);

        export function trackSearch(query: string, category: string, resultCount: string, url: string);
    }
    export default BNFMatomo;
}

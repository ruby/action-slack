import type { Agent } from 'node:http';
import type { Block, KnownBlock, MessageAttachment } from '@slack/types';
/**
 * A client for Slack's Incoming Webhooks
 */
export declare class IncomingWebhook {
    /**
     * The webhook URL
     */
    private url;
    /**
     * Default arguments for posting messages with this webhook
     */
    private defaults;
    /**
     * Axios HTTP client instance used by this client
     */
    private axios;
    constructor(url: string, defaults?: IncomingWebhookDefaultArguments);
    /**
     * Send a notification to a conversation
     * @param message - the message (a simple string, or an object describing the message)
     */
    send(message: string | IncomingWebhookSendArguments): Promise<IncomingWebhookResult>;
    /**
     * Processes an HTTP response into an IncomingWebhookResult.
     */
    private buildResult;
}
export interface IncomingWebhookDefaultArguments {
    username?: string;
    icon_emoji?: string;
    icon_url?: string;
    channel?: string;
    text?: string;
    link_names?: boolean;
    agent?: Agent;
    timeout?: number;
}
export interface IncomingWebhookSendArguments extends IncomingWebhookDefaultArguments {
    attachments?: MessageAttachment[];
    blocks?: (KnownBlock | Block)[];
    unfurl_links?: boolean;
    unfurl_media?: boolean;
    metadata?: {
        event_type: string;
        event_payload: Record<string, any>;
    };
}
export interface IncomingWebhookResult {
    text: string;
}
//# sourceMappingURL=IncomingWebhook.d.ts.map
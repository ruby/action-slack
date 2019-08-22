import * as core from '@actions/core';
import { IncomingWebhook } from '@slack/webhook';

async function run() {
  try {
    if (process.env.SLACK_WEBHOOK_URL === undefined) {
      throw new Error('SLACK_WEBHOOK_URL is not set');
    }
    const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);
    var payload = eval("payload = " + core.getInput('payload'));

    await webhook.send(JSON.parse(JSON.stringify(payload)));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

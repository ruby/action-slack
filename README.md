# k0kubun/action-slack

## Usage

Set your incoming webhook to `SLACK_WEBHOOK_URL`, and just directly specify its payload.

```yml
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: k0kubun/action-slack@v1.0.0
        with:
          payload: |
            {
              "attachments": [{
                "title": "${{ job.status }}: ${{ github.workflow }}",
                "title_link": "https://github.com/${{ github.repository }}/commit/${{ github.sha }}/checks",
                "text": "${{ github.repository }}@${{ github.ref }}: <https://github.com/${{ github.repository }}/commit/${{ github.sha }}|${{ github.sha }}>",
                "fields": [{ "value": ${{ toJson(github.event.head_commit.message) }}, "short": false }],
                "footer": "${{ github.event.head_commit.committer.name }} at ${{ github.event.head_commit.timestamp }}",
                "color": "danger"
              }]
            }
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
        if: failure() && github.event_name == 'push'
```

## Build

```
$ npm install
$ npm run build
```

## License

MIT License

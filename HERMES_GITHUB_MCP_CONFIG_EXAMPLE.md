# HERMES_GITHUB_MCP_CONFIG_EXAMPLE.md

This file is optional. Use it only after your basic Hermes + GitHub + Cloudflare + Sanity workflow works.

Hermes can work from a local repository without GitHub MCP. For a beginner workflow, it is often safer to start by letting Hermes edit local files, then use GitHub Desktop or normal GitHub commits.

If you later want Hermes to interact with GitHub through MCP, start with a small allowlist. Do not expose destructive tools first.

## Safer first GitHub MCP idea

Use read/search and issue-related tools before allowing repo writes. Exact tool names depend on the GitHub MCP server you install.

```yaml
mcp_servers:
  github:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-github"]
    env:
      GITHUB_PERSONAL_ACCESS_TOKEN: "${GITHUB_PERSONAL_ACCESS_TOKEN}"
    tools:
      include:
        - search_code
        - list_issues
        - create_issue
        - update_issue
      resources: false
      prompts: false
```

## Safer filesystem MCP idea

Use filesystem access scoped to one project folder only. Do not give filesystem access to your whole computer.

```yaml
mcp_servers:
  project_fs:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/your/agency-site-starter"]
```

## Rules

- Use one MCP server at a time until you understand what it exposes.
- Filter tools immediately.
- Keep tokens in environment variables, not in committed files.
- Do not give Hermes access to client passwords, donor data, member records, payment data, or private church data.
- Confirm available tools inside Hermes before asking it to perform work.

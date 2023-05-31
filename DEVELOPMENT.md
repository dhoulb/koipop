# Development

## Development

- Use the `Start Debugging` command (`F5`) in VS Code to launch this _extension_ in a new **VS Code** window.
- Updates will automatically refresh in the new window.
- Code examples in the `./tests` folder to test against.
- Publish using `npm run publish` (or push to GitHub to publish automatically).

## Authorisation

- Requires the `VSCE_PAT` environment token to be in scope.
- To create a new Personal Access Token:
  - Create an [Azure Devops](https://learn.microsoft.com/azure/devops/organizations/accounts/create-organization) organisation.
  - Generate a Personal Access Token within the organisation (give it the `Marketplace → Manage` scope).
  - Create a [Visual Studio Marketplace Publisher](https://marketplace.visualstudio.com/manage) profile.
  - Create the `VSCE_PAT` secret in [Github Settings](https://github.com/dhoulb/koipop/settings/secrets/actions).
- Regenerating an expired Personal Access Token:
  - Regenerate the token on [Azure Devlops](https://dev.azure.com/dhoulb/_usersSettings/tokens)
  - Update the `VSCE_PAT` secret in [Github Settings](https://github.com/dhoulb/koipop/settings/secrets/actions)

## References

- [VS Code Theme Color Reference](https://code.visualstudio.com/api/references/theme-color#editor-colors)
- [VS Code Semantic Highlight Guide](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide)

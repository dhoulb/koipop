# Development

## Development

- Use the `Start Debugging` command (`F5`) in VSCode to launch this extension in a new VSCode window.
- Updates will automatically refresh in the new window.
- Code examples in the `./tests` folder to test against.
- Publish using `npm run publish` (or push to GitHub to publish automatically).

## Authorisation

- Requires the `VSCE_PAT` environment token to be in scope.
- To create a new Personal Access Token:
  - Create an [Azure Devops](https://learn.microsoft.com/azure/devops/organizations/accounts/create-organization) organisation
  - Generate a Personal Access Token within the organisation (give it the `Marketplace → Manage` scope).
  - Create a [Visual Studio Marketplace Publisher](https://marketplace.visualstudio.com/manage) profile
  - Create the `VSCE_PAT` secret in [Github Settings](https://github.com/dhoulb/koipop/settings/secrets/actions)
- Regenerating an expired Personal Access Token:
  - Regenerate the token on [Azure Devlops](https://dev.azure.com/dhoulb/_usersSettings/tokens)
  - Update the `VSCE_PAT` secret in [Github Settings](https://github.com/dhoulb/koipop/settings/secrets/actions)

## Colors

```colors.css
:root {
  /* Colours (vaguely Monokai inspired). */
	--color-pink: #e718a2;
	--color-yellow: #ffe01a;
	--color-green: #92f416;
	--color-purple: #9f49c7;
	--color-blue: #2f78e5;
	--color-orange: #ffb21a;
	--color-red: #e5352f;

  /* Greyscale (slight cool tint). */
  --color-black: black;
	--color-gray05: #0b0c0e; /* hsl(216deg 10% 5%) */
	--color-gray10: #17191c; /* hsl(216deg 10% 10%) */
	--color-gray15: #22252a; /* hsl(216deg 10% 15%) */
	--color-gray20: #2e3238; /* hsl(216deg 10% 20%) */
	--color-gray25: #393e46; /* hsl(216deg 10% 25%) */
	--color-gray30: #454b54; /* hsl(216deg 10% 30%) */
	--color-gray35: #505762; /* hsl(216deg 10% 35%) */
	--color-gray40: #5c6470; /* hsl(216deg 10% 40%) */
	--color-gray45: #67707e; /* hsl(216deg 10% 45%) */
	--color-gray50: #737d8c; /* hsl(216deg 10% 50%) */
	--color-gray55: #818a98; /* hsl(216deg 10% 55%) */
	--color-gray60: #8f97a3; /* hsl(216deg 10% 60%) */
	--color-gray65: #9da4af; /* hsl(216deg 10% 65%) */
	--color-gray70: #abb1ba; /* hsl(216deg 10% 70%) */
	--color-gray75: #b9bec6; /* hsl(216deg 10% 75%) */
	--color-gray80: #c7cbd1; /* hsl(216deg 10% 80%) */
	--color-gray85: #d5d8dd; /* hsl(216deg 10% 85%) */
	--color-gray90: #e3e5e8; /* hsl(216deg 10% 90%) */
	--color-gray95: #f1f2f4; /* hsl(216deg 10% 95%) */
  --color-white: white;
}
```

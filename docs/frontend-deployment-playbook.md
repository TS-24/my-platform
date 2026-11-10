# Frontend Deployment Playbook
Deployment Configuration
Hosting: Cloudflare Pages
Production branch: main
Production URL: [portfolio.timshin.fyi]
Deployment method: Automatic deployment from GitHub


## Release Procedure
1. Develop and Test
Create a feature branch from the latest main.
Implement and test changes locally.
Run npm run lint and npm run build from frontend/.
Commit and push changes.

2. Review and Verify
Open a PR targeting main, documenting the changes, testing, and deployment risks.
Review the diff and obtain required approvals.
Confirm the Cloudflare preview deployment succeeded.
Open the preview URL from the PR.
Test the changes and check for regressions.

3. Deploy to Production
Merge the approved PR into main.
Confirm the Cloudflare production deployment succeeded.
Open the production site and verify the changes.
Check critical functionality for regressions.

4. Verify Deployment Version
Open Cloudflare Pages → Deployments.
Identify the active production deployment.
Confirm the deployed Git commit ID matches the expected release.

## Rollback Procedure
Coming Soon
# GitHub Repository Setup Guide

## Enabling Code Scanning for Security Results

To get the most out of the CI/CD pipeline's security scanning features, you need to enable GitHub's Code Scanning feature:

### Steps to Enable Code Scanning:

1. **Navigate to Repository Settings:**
   - Go to your repository on GitHub
   - Click on the "Settings" tab

2. **Access Security Settings:**
   - In the left sidebar, click on "Code security and analysis"

3. **Enable Code Scanning:**
   - Find the "Code scanning" section
   - Click "Set up" next to "Code scanning"
   - Choose "Set up by GitHub Actions" (recommended)

4. **Verify Setup:**
   - The workflow will now upload Trivy security scan results to the Security tab
   - You'll see vulnerability reports under the "Security" tab in your repository

### What This Enables:

- ✅ **Security Tab Integration** - Vulnerability reports appear in GitHub's Security tab
- ✅ **Pull Request Comments** - Security issues are commented on PRs automatically  
- ✅ **Dependency Alerts** - Get notified about vulnerable dependencies
- ✅ **Security Overview** - Dashboard view of your repository's security posture

### Alternative: Artifact-Based Results

If you prefer not to enable code scanning, the workflow still works and will:
- Generate security scan reports in table format (visible in workflow logs)
- Upload SARIF files as workflow artifacts (downloadable)
- Continue with all other CI/CD functionality

## Repository Permissions

The workflow uses these permissions:
- `contents: read` - Read repository content
- `security-events: write` - Upload security scan results
- `actions: read` - Access workflow information

These are automatically granted when code scanning is enabled.

## Troubleshooting

### "Resource not accessible by integration" Error

This error occurs when:
- Code scanning is not enabled in repository settings
- The workflow runs on a fork (security restriction)
- Insufficient permissions for the GitHub token

**Solution:** Enable code scanning in repository settings as described above.

### "Code scanning is not enabled" Warning

This is expected behavior when code scanning hasn't been enabled yet. The workflow will:
- Continue successfully
- Upload results as artifacts instead
- Show security scan results in workflow logs

## Additional Security Features

Consider enabling these additional GitHub security features:

1. **Dependabot Alerts**
   - Automatically detect vulnerable dependencies
   - Create pull requests for security updates

2. **Secret Scanning**
   - Detect accidentally committed secrets
   - Prevent secret leaks in your code

3. **Branch Protection Rules**
   - Require passing CI/CD checks before merging
   - Require code reviews for production branches

Navigate to Settings → Code security and analysis to enable these features.

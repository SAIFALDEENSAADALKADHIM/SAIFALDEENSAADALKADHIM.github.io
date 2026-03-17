## Hi there 👋

<!--
**SAIFALDEENSAADALKADHIM/SAIFALDEENSAADALKADHIM** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I'm currently working on ...
- 🌱 I'm currently learning ...
- 👯 I'm looking to collaborate on ...
- 🤔 I'm looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->

---

## 🌐 Publishing at `https://saifaldeensaadalkadhim.github.io`

### Why the site currently appears at a sub-path

GitHub Pages distinguishes between two kinds of sites:

| Type | Repository name | Published URL |
|------|----------------|---------------|
| **User site** | `saifaldeensaadalkadhim.github.io` | `https://saifaldeensaadalkadhim.github.io` |
| **Project site** | anything else (e.g. `SAIFALDEENSAADALKADHIM`) | `https://saifaldeensaadalkadhim.github.io/SAIFALDEENSAADALKADHIM/` |

Because the portfolio lives in a repository named `SAIFALDEENSAADALKADHIM`, GitHub Pages treats it as a **project site** and appends the repository name to every URL.
The only way to serve at the bare root domain is to host the content in a repository named **exactly** `saifaldeensaadalkadhim.github.io`.

---

### Steps to publish at the root URL

#### 1. Create the user-site repository

1. Go to <https://github.com/new>.
2. Set **Repository name** to `saifaldeensaadalkadhim.github.io` (all lower-case).
3. Keep it **Public**.
4. Click **Create repository**.

#### 2. Copy the portfolio source into the new repository

```bash
# Clone the new empty repo
git clone https://github.com/SAIFALDEENSAADALKADHIM/saifaldeensaadalkadhim.github.io
cd saifaldeensaadalkadhim.github.io

# Copy all files from this portfolio project (adjust path as needed)
cp -r /path/to/SAIFALDEENSAADALKADHIM/* .

# Commit and push
git add .
git commit -m "Initial portfolio site"
git push origin main
```

#### 3. Enable GitHub Pages in the new repository

1. Open the new repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, choose **GitHub Actions**.
4. The `.github/workflows/deploy.yml` file (already in the project) will build and deploy the site automatically on every push to `main`.

#### 4. Verify the deployment

After the workflow finishes (~1–2 minutes), visit:

```
https://saifaldeensaadalkadhim.github.io
```

> **Note:** The `vite.config.js` in this project already uses `base: '/'`, which is the correct setting for a user site served at the root URL. No further Vite configuration is needed.

---

### Quick reference

| Setting | Value |
|---------|-------|
| Repository name | `saifaldeensaadalkadhim.github.io` |
| Pages source | GitHub Actions |
| Deploy workflow | `.github/workflows/deploy.yml` |
| Vite base path | `/` (already configured) |
| Published URL | `https://saifaldeensaadalkadhim.github.io` |

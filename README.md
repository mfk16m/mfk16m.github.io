# Sieve AI

**by Mohammed Fardeen Khan** · © 2026 Mohammed Fardeen Khan. All rights reserved.

Sieve AI checks coursework for plagiarism, references, AI-style writing and ATS keyword match, and has its own grammar checker, rewriter, paraphraser and summarizer that learn from you. Everything is free, with no subscription. One app covers Android phones and tablets, Windows, Mac and Linux computers, and iPhone and iPad. It installs from the browser, gets its own icon and window, works offline and encrypts the work it saves.

## What's in this folder

| File | What it does |
|---|---|
| `index.html` | Sieve AI itself. Its code is encrypted. |
| `manifest.webmanifest` | Makes Sieve AI installable, with its name, icons and shortcut. |
| `sw.js` | Keeps Sieve AI working offline. |
| `icons/`, `screenshots/` | App icons and the pictures shown when you install. |
| `.nojekyll` | Lets GitHub Pages publish every file. Your computer may hide it. |

## 1. Put Sieve AI online (once, free)

Installing needs a web address that all your devices can open. GitHub Pages hosts it for free.

1. Sign up at https://github.com.
2. Select **+** → **New repository**. Name it `YOUR-USERNAME.github.io`, using your exact GitHub username, set it to **Public**, then select **Create repository**.
3. Select **uploading an existing file**, or **Add file** → **Upload files**. Unzip this package, open the `sieve-ai-app` folder and drag everything inside it into the upload box, including the `icons` and `screenshots` folders. Select **Commit changes**.
4. Open **Settings** → **Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose **main** and **/ (root)**, then select **Save**.
5. After a minute or two, Sieve AI is live at `https://YOUR-USERNAME.github.io/`.

Free GitHub accounts publish public repositories, so anyone can see the files. That's why the app's code is encrypted. Never upload `Sieve-AI-source.html`, the readable version.

## 2. Install on Android

1. Open your Sieve AI address in **Chrome**.
2. Tap **Install app** at the top of Sieve AI, or open Chrome's **⋮** menu and choose **Install app** (on some phones, **Add to Home screen**).
3. Sieve AI appears with your other apps. To check text from another app, select it, tap **Share** and choose Sieve AI.

## 3. Install on a Windows, Mac or Linux computer

1. Open your Sieve AI address in **Chrome** or **Microsoft Edge**.
2. Select the install icon at the right-hand end of the address bar, or **Install app** at the top of Sieve AI. In Chrome's menu, look under **Cast, save and share** → **Install Sieve AI**; in Edge, choose **Apps** → **Install this site as an app**.
3. Sieve AI gets its own Start menu or Applications entry and opens in its own window. You can also right-click a .docx, .pdf or .txt file and choose **Open with** → **Sieve AI**. The first time, Sieve AI asks whether it may open files.

## 4. Install on iPhone or iPad

1. Open your Sieve AI address in **Safari**.
2. Tap **Share**, then **Add to Home Screen**, then **Add**. This needs iOS 16.4 or later.

Repeat sections 2 to 4 on every device you want Sieve AI on.

**No-install option:** `Sieve-AI.html`, which comes separately, is the whole app in one file. Double-click it to open it in Chrome or Edge on any computer. Every check works, including the automatic searches, but this copy can't be installed and doesn't update itself.

## 5. Using Sieve AI

Sieve AI works for any subject and any university, and for CVs in any industry. Select **Try the example** to see a science essay, a business report or a CV with a job advert, and **Guide** for a walkthrough of every check. In short:

- **Add your work:** paste it onto the sheet, drop a Word, PDF or text file on it, or use the upload button. Put the reference list at the end under a heading such as References.
- **Plagiarism:** select **Search now** to search Europe PMC and Wikipedia automatically, and add the sources you used under **Your sources**.
- **References:** select **Verify automatically** to check each entry against Crossref and Europe PMC, or check entries by hand and tick **I've checked this**.
- **AI check:** shows, sentence by sentence, the habits AI-written text overuses. It's a prompt to revise, not proof.
- **ATS & brief:** paste an assignment brief to find key terms you haven't covered, or a job advert to score a CV.
- **Writing tools:** grammar check, rewrite, paraphrase and summarize. See section 6.

## 6. Writing tools: grammar, rewrite, paraphrase, summarize

Open **Writing tools** under the four dials. None of it needs Grammarly, QuillBot or any subscription.

| Tool | What it does | Works offline? |
|---|---|---|
| Grammar | Spelling, grammar, punctuation, British/American consistency and academic style. Click an underline to fix it. | Yes. The free LanguageTool check adds more when online. |
| Rewrite | Makes your own text clearer, professional, academic, concise or friendlier. | Basic version yes; best with an AI engine. |
| Paraphrase | Says it in new words: standard, fluent, formal, academic, simple, creative, shorter, longer. | Basic version yes; best with an AI engine. |
| Summarize | Key points, a paragraph, one line or an abstract. | Key sentences yes; AI summaries with an engine. |

**Run on: This device or Online.** Use the switch in Writing tools.

- **This device** (your text never leaves it): Chrome's built-in AI on capable computers; a **private model** that runs on your phone's or laptop's graphics chip after a one-time free download (0.4 to 2 GB, in AI settings); or the **Basic** engine, which works everywhere.
- **Online** (best quality): **Claude in this page** on claude.ai, using your Claude plan; a **free Google Gemini key** from Google AI Studio, which also works on phones; or optional Claude or OpenAI keys, paid as you go. Offline, Sieve AI switches to this device automatically.

**It learns from you.** Words you add to your dictionary, corrections you accept from LanguageTool or an AI engine (which it then makes offline), and kinds of suggestion you keep ignoring (which it stops showing). See or reset it under **AI settings** → **What Sieve AI has learned**. The built-in rules never change.

Rewritten and paraphrased text is AI-generated and raises AI-detection scores. Check your course's rules before using it in assessed work, and keep citing your sources.

## 7. Saving, passcode and Lock

- Tick **Remember my work on this device, encrypted with a passcode**, then choose a passcode of at least 6 characters.
- Sieve AI encrypts your work with AES-256-GCM before saving it. The key is made from your passcode with PBKDF2-SHA-256 (600,000 rounds) and is never stored.
- Your API keys and what Sieve AI has learned are saved in the same encrypted copy.
- Select **Lock** to hide your work. Enter your passcode the next time Sieve AI opens to carry on.
- Nobody can recover a forgotten passcode. Choose **Forgot your passcode?** to delete the saved work and start again.
- Each device keeps its own copy and nothing syncs between devices. Untick the box to delete the copy on that device.

## 8. Updating Sieve AI

1. Ask Claude for the change, attaching `Sieve-AI-source.html`. A copy is also kept in your Claude project. Claude rebuilds the app.
2. In your GitHub repository, select **Add file** → **Upload files**, upload the new `index.html` and any other changed files, then select **Commit changes**.
3. Every installed copy updates the next time it opens with an internet connection.

## 9. Optional: an APK or a Microsoft Store package

1. Go to https://www.pwabuilder.com and enter your Sieve AI address.
2. Choose **Package for stores**, then **Android** (an APK to install directly, or an AAB for Google Play) or **Windows** (an MSIX package).
3. For the Android app to open without a browser address bar, PWABuilder gives you an `assetlinks.json` file. In your repository, select **Add file** → **Create new file**, type `.well-known/assetlinks.json` as the name, paste in the file's contents and commit.

## Security and privacy

- **Your documents** are checked on your device and never uploaded. Automatic searches send short phrases from your text, and the reference check sends your reference list, to Europe PMC, Wikipedia and Crossref.
- **Writing tools** send only the text you choose, when you press a button: to LanguageTool for the online grammar check, and to the online AI engine you picked. Chrome's built-in AI, the private model and the Basic engine send nothing. Gemini's free tier may use what you send to improve Google's products.
- **Security policy:** Sieve AI may connect only to those services, plus Google Fonts and cdnjs for its fonts and the Word and PDF readers, and jsDelivr, Hugging Face and GitHub for the private model download. The browser blocks everything else.
- **API keys** stay in memory until you close Sieve AI, or encrypted with your passcode if you tick Remember.
- **Saved work** is encrypted with your passcode as described above. Without the passcode the saved copy can't be read.
- **The app's code** ships encrypted and is unlocked by the browser when Sieve AI opens, so viewing the page source shows only scrambled data. Because every browser has to be able to run it, a determined programmer could still extract the code. This deters casual copying; it isn't a lock.
- Sieve AI has no accounts, adverts, analytics or server of its own.

## Limits

- Automatic plagiarism search covers Europe PMC and Wikipedia, plus any sources you add, so it finds most for science and health topics. Checkers that universities use, such as Turnitin, also search the wider web, publishers' databases and past student papers, so a low Sieve AI score doesn't guarantee a low score there.
- The checks are built for English text, in British or American spelling.
- "Not found" for a reference often means a book, report or web page that Crossref and Europe PMC don't list. Check it yourself.
- No tool can prove whether a text was written by AI.
- The Word and PDF readers download the first time Sieve AI is opened online, then work offline.
- The Basic engine only fixes errors, tightens wording and swaps common words; for natural rewriting use an AI engine. Small private models write less well than online ones; choose Large on a laptop for the best on-device results.
- Chrome's built-in AI needs a recent Chrome on a capable Windows, Mac or Linux computer. The private model needs a browser with WebGPU, such as Chrome or Edge. Direct use of a device's neural processor (WebNN) is still experimental in browsers, so Sieve AI uses the graphics chip.

Sieve AI is an independent tool by Mohammed Fardeen Khan. It is not affiliated with any university or with Turnitin.

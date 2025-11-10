# ✅ FINAL EMAILJS SETUP - Contact Us Template

## 🎯 Correct Template Type: "Contact Us"

From the template options you showed, select: **"Contact Us"**

---

## 📋 Step-by-Step Setup

### **Step 1: Create Template from "Contact Us"**

1. Go to: https://dashboard.emailjs.com/admin/templates
2. Click **"Create New Template"** (or edit `template_vvyamnf`)
3. Select: **"Contact Us"** from the template list
4. Click to open the template editor

---

### **Step 2: Configure Template Settings**

At the top of the template editor, fill in these fields EXACTLY:

```
┌──────────────────────────────────────────────────────┐
│ To email:    garvpandey34@gmail.com                 │ ← YOUR EMAIL!
│ From name:   {{from_name}}                          │
│ Reply to:    {{reply_to}}                           │
│ Subject:     New Portfolio Contact: {{from_name}}   │
└──────────────────────────────────────────────────────┘
```

#### **Field-by-Field:**

| Field | Value | Important! |
|-------|-------|-----------|
| **To email** | `garvpandey34@gmail.com` | ⚠️ Must be your real email - NO variables! |
| **From name** | `{{from_name}}` | Shows sender's name |
| **From email** | Leave default or `noreply@emailjs.com` | Optional |
| **Reply to** | `{{reply_to}}` | Lets you reply to sender |
| **Subject** | `New Portfolio Contact: {{from_name}}` | Email subject line |

---

### **Step 3: Template Content (Body)**

The "Contact Us" template may have default content. Replace it with this:

```
Hello Garv,

You have received a new message from your portfolio website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SENDER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This message was sent from your portfolio contact form.
Click "Reply" to respond directly to {{from_name}}.

Best regards,
Portfolio Contact System
```

---

### **Step 4: Verify Template Variables**

Make sure these variables are in your template:

- ✅ `{{from_name}}` - Sender's name
- ✅ `{{from_email}}` - Sender's email address
- ✅ `{{message}}` - The message content
- ✅ `{{reply_to}}` - Reply-to address

These match the variables your React code is sending! ✅

---

### **Step 5: Test the Template**

Before saving, test it:

1. Click **"Test It"** button (top right of template editor)
2. Fill in these test values:
   ```
   from_name: John Doe
   from_email: john@example.com
   message: Hi Garv, I'd love to discuss a project with you!
   reply_to: john@example.com
   ```
3. Click **"Send Test"**
4. Check your inbox: `garvpandey34@gmail.com`
5. If you receive the test email ✅ → Proceed to save!

---

### **Step 6: Save & Activate**

1. Click **"Save"** at the bottom
2. Make sure template shows as **"Active"** (green badge)
3. Copy your Template ID: `template_vvyamnf` (you already have this)

---

## 🎯 Critical: The "To email" Field

### **This is where Error 422 comes from!**

The "To email" field tells EmailJS **WHERE to send the message**.

#### ✅ CORRECT:
```
To email: garvpandey34@gmail.com
```

#### ❌ WRONG:
```
To email: {{to_email}}         ← Variables don't work
To email: {{from_email}}       ← Would send to visitor
To email: [empty]              ← Error 422!
```

---

## 📊 How Your Portfolio Form Maps to Template

Your React code sends this data:

```javascript
{
  from_name: "John Doe",           // ← Visitor's name
  from_email: "john@example.com",  // ← Visitor's email
  message: "Hi Garv, ...",         // ← Their message
  reply_to: "john@example.com",    // ← Reply-to address
}
```

EmailJS template receives it:

```
To email: garvpandey34@gmail.com  ← Where it goes (YOUR inbox)
From name: {{from_name}}          ← Shows "John Doe"
Reply to: {{reply_to}}            ← Reply goes to "john@example.com"
Subject: New Portfolio Contact: {{from_name}}
Content: Shows {{from_email}} and {{message}}
```

Perfect match! ✅

---

## 🎨 What You'll See in Your Inbox

When someone fills your contact form:

```
╔═══════════════════════════════════════════════════════╗
║ 📧 Inbox: garvpandey34@gmail.com                     ║
╠═══════════════════════════════════════════════════════╣
║                                                       ║
║ From: John Doe (via EmailJS)                         ║
║ Reply-to: john@example.com                           ║
║ Subject: New Portfolio Contact: John Doe             ║
║                                                       ║
║ ─────────────────────────────────────────────────   ║
║                                                       ║
║ Hello Garv,                                          ║
║                                                       ║
║ You have received a new message from your            ║
║ portfolio website!                                    ║
║                                                       ║
║ SENDER DETAILS                                        ║
║ Name: John Doe                                        ║
║ Email: john@example.com                              ║
║                                                       ║
║ MESSAGE                                               ║
║ Hi Garv, I'd love to discuss a project with you!    ║
║                                                       ║
║ ─────────────────────────────────────────────────   ║
║                                                       ║
║ [Reply] [Forward] [Delete]                           ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
```

When you click **"Reply"**, it will compose a message to: `john@example.com` ✅

---

## ✅ Final Checklist

Before leaving EmailJS dashboard:

- [ ] Template type: **"Contact Us"** selected ✅
- [ ] Template ID: `template_vvyamnf` ✅
- [ ] Service ID: `service_rqnniin` ✅
- [ ] Public Key: `2p9v5zEjWPaIyQqUJ` ✅
- [ ] "To email": `garvpandey34@gmail.com` ✅
- [ ] "From name": `{{from_name}}` ✅
- [ ] "Reply to": `{{reply_to}}` ✅
- [ ] Subject: Contains `{{from_name}}` ✅
- [ ] Content: Has `{{from_name}}`, `{{from_email}}`, `{{message}}` ✅
- [ ] Template is **"Active"** (green badge) ✅
- [ ] Email service is **"Connected"** ✅
- [ ] Test email sent and received ✅

---

## 🚀 After Setup

Once configured:

1. Go to your portfolio
2. Scroll to Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. ✅ Success toast appears
6. 📧 Email arrives in your inbox
7. Click "Reply" to respond to the sender

---

## 🆘 Troubleshooting

### Still getting Error 422?

1. **Double-check "To email" field:**
   - Must be: `garvpandey34@gmail.com`
   - NOT: `{{to_email}}` or empty

2. **Verify email service is connected:**
   - Go to: https://dashboard.emailjs.com/admin
   - Check your Gmail/Outlook shows "Connected"

3. **Check template is Active:**
   - Should have green "Active" badge
   - If it says "Draft", activate it

4. **Verify IDs match:**
   - Service: `service_rqnniin`
   - Template: `template_vvyamnf`
   - Public Key: `2p9v5zEjWPaIyQqUJ`

5. **Test in EmailJS dashboard first:**
   - Use "Test It" button
   - If test works, portfolio will work too!

---

## 🎯 Summary

**Template Type:** "Contact Us" (from the list you showed)  
**Critical Field:** "To email" = `garvpandey34@gmail.com`  
**Why it failed:** The "To email" field was empty or had a variable  
**Solution:** Put your real email address in "To email" field

Your code is perfect ✅  
Your credentials are correct ✅  
Just need to configure the template ✅

---

**Go to:** https://dashboard.emailjs.com/admin/templates/template_vvyamnf

**Fill "To email":** `garvpandey34@gmail.com`

**Save → Test → Done!** 🎉

 
## Project name : Game Hub
-------------------

* Purpose : Gaming Website Show Many types of game. Use can download game to their own choice.

-----------------

* Live URL :  https://gamehub-80a69.web.app/

----------

* key features : 

1. Layout & Navigation :

Single layout for all pages: header, footer, main content.

404 page has a different layout if needed.

Navbar: logo on left, page links on right.

Login/Register links visible only if user is not logged in.

Logged-in user sees profile picture instead of Login/Register.

Clicking profile picture navigates to My Profile page.

---

2. Homepage :

Banner Slider: Minimum 3 slides with game images.

Popular Games Section:

At least 3 games sorted by rating.

Each card shows cover photo, title, ratings, developer, etc.

Clicking a card opens Game Details page.

Newsletter Section :

Collect user emails for newsletters.

Designed after researching game newsletter examples online.

---

3. Game Details Page (Protected) :

Displays all game details from JSON data.

Protected Page:

If user is not logged in → redirected to login page.

---

4.  Authentication :

Login Page:

Email & password-based login.

Google Login integration.

Link to navigate to Register page.

Password validation:

At least 1 uppercase

At least 1 lowercase

Minimum 6 characters

Register Page:

Inputs: Name, Email, Photo URL, Password.

Link to navigate to Login page.

Google Login supported.

---

5. Forget Password Feature :

User can reset password via email.

If email entered in Login → autofilled in Forget Password form.

Redirects user to Gmail after reset.



---

6. Update Profile Feature :

My Profile Page → Update button → navigate to UpdateProfile page.

Form inputs: Name, Photo URL.

Update Information button updates Firebase profile.



---

7. Additional Features :

Dynamic Page Title: tab title changes based on current page.

Animation Libraries supported: Motion (Framer Motion), GSAP, React Spring.

Additional Route: optional, based on website theme.

404 / Not Found page created.


------------ 
* NPM Packages used : 

    "@tailwindcss/vite": "^4.1.15",
    "firebase": "^12.4.0",
    "gsap": "^3.13.0",
    "motion": "^12.23.24",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.4",
    "react-toastify": "^11.0.5",
    "tailwindcss": "^4.1.15"


# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

[Desktop Version](./src/assets/screenshots/notifications-page-desktop.png)

[Mobile Version](./src/assets/screenshots/notifications-page-mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- Install Vite for module bundlers.
- Choice react typescript as library.
- Install tailwind css and do some utility config for this challenge, like custom breakpoints screens, colors, font family etc.
- Breakdown the design into piece components for single responsibility principle (SPR).
- Input the data(dummy) from challenge to [index.tsx](./src/constants/index.tsx)
- Mobile first to implements the CSS with tailwind.
- Build props from data with parents to children.
- Implements css for desktop.
- Editing and testing on localhost.
- Commit and push to github.
- Build with vercel.
- Editing and so on.

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- [React Typescript](https://reactjs.org/) - JS library
- [Vite](https://nextjs.org/) - Module Bundlers
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [Vercel](https://vercel.com) - Deployment

### What I learned

This challenge i'm learning a lot about props to separate data(etc:dummy) with component's, and then using ternary condition for object to call component.

See code below:

```typescript
import AvatarNotif from "./AvatarNotif";
import PrivateMessage from "./PrivateMessage";
import { accounts } from "../constants";

const CardAvatar = () => {
  return (
    <div className='just css class'>
      {accounts.map((account) => (
        <AvatarNotif
          srcAvatar={account.avatar}
          name={account.name}
          altAvatar={account.alt}
          about={account.about}
          destiny={account.destiny}
          status={account.status}
          time={account.time}
          imageCommented={account.imageCommented}
          altImageCommented={account.altImageCommented}
          classAbout={account.classAbout}
          classCard={account.classCard}
          children={
            account.isHasChildren ? <PrivateMessage pm={account.pm} /> : ""
          }
        />
      ))}
    </div>
  );
};
```

```typescript
import Avatar from "./Avatar";

const AvatarNotif = (props: any) => {
  const {
    srcAvatar,
    name,
    about,
    destiny,
    time,
    classCard = "just css clas",
    children,
    altAvatar,
    altImageCommented,
    imageCommented,
    status,
    classAbout = "just css class",
  } = props;
};
```

```typescript
import {
  AvatarAngelaGray,
} from "../assets/IndexImages";

export const accounts = [
  {
    id: "mark-webber",
    avatar: AvatarMarkWebber,
    name: "Mark Webber ",
    alt: "Mark Webber Avatar",
    about: "reacted to your recent posts ",
    destiny: "My first tournament today! ",
    status: "  🔴 ",
    time: "1m ago",
    pm: "",
    imageCommented: "",
    altImageCommented: "",
    isHasChildren: false,
  },
];
...
```

### Continued development

For continue development like this challenge, i want give few hooks with useStats in notif and number counter, if client doing click and then counter do decrement with disable blue highlight, same with function "mark all as read".

### Useful resources

- [React Docs](https://beta.reactjs.org/) - This helped me for react fundamental like props, components and using useState. I really liked this explanation and will use it going forward.
- [Tailwind Elements](https://tailwind-elements.com) - This is an amazing reference which helped me guiding the design. I'd recommend it to anyone still learning this concept and example.

## Author

- My Website - [GUIDOFAMULA.COM](https://guidofamula.com)
- Frontend Mentor - [@guidofamula](https://www.frontendmentor.io/profile/guidofamula)
- Linkedin - [Guido Famula](https://www.linkedin.com/in/guido-famula/)

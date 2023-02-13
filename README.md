<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://cdn.icon-icons.com/icons2/1996/PNG/512/chat_facebook_media_message_messenger_network_social_icon_123283.png" alt="Project logo"></a>
</p>

<h3 align="center">Messenger</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">A project portfolio piece utilising websockets for live chat.
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)

## 🧐 About <a name = "about"></a>
Messenger is a peer to peer messaging service with group chat functionality. It utilises socket.io to create bidirectional, event based communication. Users must register/login using the Authorisation API in order to use the service.

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
What things you need to install the software and how to install them.

```
Yarn
Authorisation API (if running the backend locally)
```

### Installing
1. Clone the repository.

```
https://github.com/clewup/messenger.git
```

2. Install the required packages.

```
yarn install
```

3. Start the project.

```
yarn dev
```

## 🔧 Running the tests <a name = "tests"></a>
```
yarn test
```

## 🎈 Usage <a name="usage"></a>
The application is deployed for viewing and use at https://messenger.clewup.co.uk.

## 🚀 Deployment <a name = "deployment"></a>
The application is deployed through Vercel.

## ⛏️ Built Using <a name = "built_using"></a>
- [NextJS](https://nextjs.org) - Framework (utilising a custom express server)

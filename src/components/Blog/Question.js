export const data = [
  {
    id:1,
    headingId: "headingOne",
    collapseid: "collapseOne",
    isExpanded: true,
    isCollapse: 'show',
    question: 'authorization এবং authentication এর মধ্যে পার্থক্য কি?',
    answer: `authorization হচ্ছে কোন একটা resource এর এক্সেস করার পারমিশন থাকাকে বুঝায়। আর authentication হচ্ছে কোন একটা ইউজার valid কিনা সেটা চেক করাকে বুঝায় যেমন আমরা সাধারনত ইউজার ভ্যলিড কিনা সেটা চেক করার জন্য ইউজারকে লগিন অপশন দিয়ে থাকি । যদি ইউজার সঠিক ডাটা প্রধান করে তাহলে authentication চেক করে ইউজারকে authorised করে দেওয়া হয়। আর যদি ইউজার সঠিক ডাটা প্রদান না করে থাহলে authentication failed হলে ইউজারকে unauthorised করে দেওয়া হয়। সাধারনত user authentication চেক করার প্রধানত ৩ টি উপায় অবলম্বন করে থাকে যেমন। * Single-Factor Authentication * Two-Factor Authentication *Multi-Factor Authentication`
  },
  {
    id:2,
    headingId: "headingTwo",
    collapseid: "collapseTwo",
    isExpanded: false,
    isCollapse: '',
    question: 'Why are you using firebase? What other options do you have to implement authentication?',
    answer: `firebase ব্যাবহার করার অন্যতম কারন হচ্ছে firebase এর authentication system । কারন আমরা আমাদের নিজস্ব server তৈরি করে উজারের ডাটা সংরক্ষন করতে পারি কিন্তু তা highly secured করা আমাদের পক্ষে সম্ভব হয়না যার কারনে আমরা কোন third party authentication system ব্যাবহার করে থাকি এছাড়াও এখানে খুব সহযেই Email veification , phone verification social media verification use করে ইউজারকে আইডেন্টিফাই করা যায়। firebase ছাড়াও আরো অনেক third party authentication platform রয়েছে। যেমনঃ ১- Okta ২- Ory ৩-Supabase ৪- STYTCH ৫-PingIdentity ৬- Keycloak ৭- Frontegg ইত্যাদি।`
  },
  {
    id:3,
    headingId: "headingThree",
    collapseid: "collapseThree",
    isExpanded: false,
    isCollapse: '',
    question: 'What other services does firebase provide other than authentication?',
    answer: `firebase authentication service ছাড়াও আরো অনেক service provide করে থাকে। যেমনঃ ১- Cloud Firestore.
    ২- Cloud Functions.
    ৩- Hosting.
    ৪- Cloud Storage.
    ৫- Google Analytics.
    ৬- Predictions.
    ৭- Cloud Messaging. ইত্যাদি।`
  },
]
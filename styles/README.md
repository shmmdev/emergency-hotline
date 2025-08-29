# JavaScript DOM Questions

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**উত্তর:**  
getElementById("id") → একটা এলিমেন্টকে তার আইডি দিয়ে খুঁজে পাওয়া যায়।  
getElementsByClassName("class") → একই ক্লাস নেমের সব এলিমেন্টকে খুঁজে বের করে এবং একটা লিস্ট রিটার্ন করে  
querySelector("css") → প্রথম যে সিলেক্টর পায় শুধুমাত্র সেটাকে রিটার্ন করে। এর মাধ্যমে ক্লাস, আইডি বা ট্যাগ নেম দিয়ে এলিমেন্ট সিলেক্ট করা পসিবল।  
querySelectorAll("css") → একই নামের সবগুলো  সিলেক্টরকে লিস্ট আকারে  রিটার্ন করে। এর মাধ্যমে ক্লাস, আইডি বা ট্যাগ নেম দিয়ে এলিমেন্ট সিলেক্ট করা পসিবল।

---

## 2. How do you create and insert a new element into the DOM?

**উত্তর:**  
`document.createElement();` → এই কমান্ড দিয়ে আমরা নতুন html এলিমেন্ট বানাতে পারি।  
`newDiv.textContent = "Hello!";` → এই কমান্ড দিয়ে আমরা এলিমেন্টের ভিতরে টেক্সট কন্টেন্ট যুক্ত করতে পারি।  
`document.body.appendChild();` → এই কমান্ড দিয়ে আমরা ডমে ইনসার্ট করি।

---

## 3. What is Event Bubbling and how does it work?

**উত্তর:**  
যখন একটা চাইল্ড এলিমেন্টে ক্লিক করা হয়, সেটা প্রথমে চাইল্ডে রান করে। তারপর সেটা 'বাবল আপ' হতে হতে প্যারেন্ট এলিমেন্টে যায়। এভাবে করে একদম সর্বশেষ প্যারেন্ট পর্যন্ত ক্লিক ইভেন্ট চলে যাবে।

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

**উত্তর:**  
অনেক চিলড্রেনে ইভেন্ট সেট না করে একবারে প্যারেন্টে সেট করাকে ইভেন্ট ডেলিগেশন বলে।  
ইভেন্ট বাবল আপ হয়ে উপরে চলে যায় তাই এটা ইউজফুল। এছাড়া মেমরি সেভ করে।

---

## 5. Difference between preventDefault() and stopPropagation()

**উত্তর:**  
preventDefault() → ডিফল্ট অ্যাকশন প্রিভেন্ট করে  
stopPropagation() → ইভেন্ট বাবল আপ হওয়া থামায়

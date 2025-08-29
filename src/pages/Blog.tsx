
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">BloodBridge Blog</h1>
          <p className="text-white/80">Educational content about blood donation and health</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* First Article */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-blood-red mb-6">BloodBridge: The Life Saving Power of Technology</h2>
            
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Table of Contents</h3>
              <ul className="list-disc list-inside mb-6 text-gray-600">
                <li>Introduction</li>
                <li>What is BloodBridge</li>
                <li>Why BloodBridge matters</li>
                <li>Features</li>
                <li>For donors</li>
                <li>For hospitals</li>
                <li>Movement</li>
                <li>FAQs</li>
                <li>About Us</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Introduction</h3>
              <p className="mb-6 text-gray-700">
                In a world where every second counts, access to safe blood can mean the difference between life and death. Whether it's for a mother undergoing emergency surgery, a child battling sickle cell anemia, or a victim of a road accident, the demand for blood is constant. Yet, Nigeria, like many countries, faces persistent blood shortages. This is where BloodBridge steps in a smart, reliable, and user-friendly blood donation app designed to connect donors to those in urgent need.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">What is BloodBridge?</h3>
              <p className="mb-6 text-gray-700">
                BloodBridge is a real-time blood donation and tracking app that simplifies the entire blood donation process. From registration to matching donors with recipients and alerting users of emergency needs, the app brings technology into the heart of humanitarian service.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why BloodBridge Matters</h3>
              <p className="mb-6 text-gray-700">
                The statistics are alarming: According to the World Health Organization (WHO), Nigeria needs over 2 million units of blood annually, but only about 500,000 units are collected. BloodBridge aims to close this gap by building a digital bridge between blood donors and recipients.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Features That Make BloodBridge Stand Out</h3>
              <ol className="list-decimal list-inside mb-6 text-gray-700 space-y-2">
                <li><strong>Real-Time Matching:</strong> Donors are matched with recipients based on location and blood type, reducing waiting time during emergencies.</li>
                <li><strong>Smart Notifications:</strong> Get alerts when your blood type is in urgent demand or when it's time for your next eligible donation.</li>
                <li><strong>Digital Donor Card:</strong> Keep track of your donation history, eligibility status, and personal health info in one place.</li>
                <li><strong>Safety First:</strong> Learn about eligibility, safety tips, and post-donation care right within the app.</li>
                <li><strong>Impact Tracker:</strong> Know how many lives your donations have touched and celebrate your giving journey.</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">For Donors: Why You Should Join</h3>
              <p className="mb-4 text-gray-700">
                By signing up on BloodBridge, you're becoming part of a life-saving network. Beyond the warm feeling of saving lives, you'll enjoy:
              </p>
              <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
                <li>Health checks before donation</li>
                <li>Priority access in times of personal need</li>
                <li>Recognition and rewards for frequent donors</li>
                <li>Community of like-minded heroes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">We're a Movement, Not Just an App</h3>
              <p className="mb-6 text-gray-700">
                BloodBridge is more than a platform; it's a movement to raise awareness about the importance of voluntary blood donation. With educational content, testimonials, and community features, the app seeks to inspire a culture of consistent giving, especially among Nigerian youth.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">For Hospitals and Blood Banks</h3>
              <p className="mb-4 text-gray-700">
                BloodBridge isn't just for individuals; it's a tool for health professionals. Hospitals can:
              </p>
              <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
                <li>Post blood requests in real-time</li>
                <li>Monitor incoming donations</li>
                <li>Coordinate blood drives efficiently</li>
                <li>Manage donor records seamlessly</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Join the Bridge Today</h3>
              <p className="mb-6 text-gray-700">
                Donating blood has never been easier or more impactful. With just a few taps, you can register, get notified, and become someone's lifeline. The web app is available on Android and iOS.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">FAQs</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">ELIGIBILITY REQUIREMENT</h4>
              
              <div className="mb-4">
                <p className="font-medium text-gray-800">At what age do I start donating blood?</p>
                <p className="text-gray-700">To donate blood, you need to be between the ages of 17 and 65 years and must weigh at least 50kg before donation.</p>
              </div>

              <div className="mb-4">
                <p className="font-medium text-gray-800">How often do I donate blood?</p>
                <p className="text-gray-700">Donation of blood for men can be every 12 weeks, while women can donate every 16 weeks.</p>
              </div>

              <div className="mb-6">
                <p className="font-medium text-gray-800">How long does it take to donate blood?</p>
                <p className="text-gray-700">Whole Blood donation usually takes between 45-60 minutes, while apheresis takes 1-2 hours.</p>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">HEALTH ASSESSMENT</h4>
              
              <div className="mb-4">
                <p className="font-medium text-gray-800">What happens before donating blood?</p>
                <p className="text-gray-700">Before donating blood, all donors undergo a basic health screening, conducted by a health professional to check for temperature, heart rate, blood pressure, pulse rate, respiratory rate and hemoglobin levels. These records are stored on the donor's online profile.</p>
              </div>

              <div className="mb-4">
                <p className="font-medium text-gray-800">Why is health screening important?</p>
                <p className="text-gray-700">Health screening is conducted to determine the health status of both the donor and recipient, ensuring they are compatible and that diseases are not transferred.</p>
              </div>

              <div className="mb-4">
                <p className="font-medium text-gray-800">How are infectious diseases tested on donated blood?</p>
                <p className="text-gray-700">All donated blood is tested for multiple disease markers. The blood is screened for common diseases such as Hepatitis B, Hepatitis C, HIV, type 1&2, syphilis, human T-lymphotropic virus, Babesia, before transfusion.</p>
              </div>

              <div className="mb-6">
                <p className="font-medium text-gray-800">How do I know I'm compatible?</p>
                <p className="text-gray-700">Further Testing are done to identify the donor's blood group and Rh type to determine compatibility with the recipient. More screening is done for atypical or unusual red cell antibodies.</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">About</h3>
              <p className="mb-8 text-gray-700">
                BloodBridge is a cutting-edge health-tech mobile and web application that solves Nigeria's critical blood supply challenges. The platform acts as a real-time bridge between voluntary blood donors, hospitals, and blood banks, ensuring life-saving blood is accessible quickly, efficiently, and safely during emergencies.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Second Article */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-blood-red mb-6">Blood Donation: Not just a good deed, but a Life-saving act</h2>
            <p className="text-gray-600 mb-6">By: Joy Uti</p>
            
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Introduction</h3>
              <p className="mb-6 text-gray-700">
                Did you know that a single blood donation can save three lives?
              </p>
              <p className="mb-6 text-gray-700">
                Ever imagined what it feels like to lie on a hospital bed, waiting for the only thing that can keep you alive —blood? The panic of family members, the endless wait for a compatible donor, the helplessness that overwhelms you; these and many more are some of the challenges faced by patients in urgent need of blood.
              </p>
              <p className="mb-6 text-gray-700">
                Many people are neither aware nor informed of the importance of donating blood. In Africa, several misconceptions and cultural beliefs are tied to the process, and this has hindered people from donating blood. A single donation not only brings about remarkable change in patient health but can also mean the difference between life and death for individuals.
              </p>
              <p className="mb-6 text-gray-700">
                Before delving deeper into the importance of blood donation, here is an overview of the functions of blood.
              </p>
              <p className="mb-6 text-gray-700">
                The human body cannot exist without blood. Blood is an essential body fluid that flows throughout the body. An average human body contains about 4–5 litres of blood, and its major components are red blood cells, white blood cells, platelets, and plasma.
              </p>
              <p className="mb-6 text-gray-700">
                The primary function of the blood is to transport oxygen, nutrients, and waste products to and from the body's cells. Because of its vital role, abnormally low levels can lead to dire consequences, such as shock, organ failure, or even death.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">What is blood donation?</h3>
              <p className="mb-6 text-gray-700">
                Blood donation is the voluntary act of giving, testing, and preserving blood and its components for transfusion and other medical uses. Blood is collected from willing donors, stored in a blood bank, and used during emergencies or other medical procedures.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of blood donation</h3>
              <p className="mb-6 text-gray-700">
                The two major types of blood donation are whole blood donation and apheresis. In whole blood donation, the complete blood is donated, whereas in apheresis, some specific components of the blood, i.e plasma & platelets, are collected while the rest of the blood is returned to the donor. It is important to note that blood cannot be manufactured, but can only be obtained through donations.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why the push for donation?</h3>
              <p className="mb-6 text-gray-700">
                Because of the growing demand. The global demand for blood continues to rise due to several medical conditions, ranging from traumatic injuries, cancers and blood disorders. About 81 million blood donations are collected annually. In Nigeria, about 1.8 million pints of blood are required, and only about 500,000 pints are donated, which is a shortage from what is needed.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why donate blood?</h3>
              <p className="mb-4 text-gray-700">
                It helps people in need and gives them a second chance at life. Donated blood is transfused to patients and helps in treating diverse medical conditions; they include:
              </p>
              <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
                <li><strong>To manage chronic conditions:</strong> Frequent transfusions are necessary for patients with chronic diseases to prevent anaemia and organ damage. In conditions such as thalassemia or aplastic anaemia, where the body cannot produce enough blood cells, blood transfusions are consistently needed to restore energy and prolong life.</li>
                <li><strong>To treat severe anaemia:</strong> Anaemia occurs when the number of circulating red blood cells is low. This can be caused by car accidents, parasitic infections, autoimmune disorders, or nutritional deficiencies. Such conditions may require a blood transfusion to replace lost cells and other essential blood components needed by the body.</li>
                <li><strong>To assist newborns and pregnant women:</strong> Certain conditions in newborns, such as hemolytic disease of the newborn, in which the maternal antibodies destroy the infant's red blood cells, can result in severe anaemia and jaundice. In such cases, blood transfusion may be required to restore healthy red cell levels and support normal growth. Similarly, childbirth complications, including severe postpartum haemorrhage, can be managed with timely blood transfusion.</li>
                <li><strong>To aid sickle cell patients:</strong> Sickle cell patients are constantly in need of blood transfusions. The abnormal structure of red blood cells of sickle cell patients makes it difficult for the blood to carry out its primary function of transporting oxygen & nutrients to body tissues, leading to painful crises. Blood transfusion helps to alleviate these complications and improve patient health.</li>
                <li><strong>To help cancer patients:</strong> Blood and platelet transfusions are vital for cancer patients. Anaemia is a common occurrence in individuals with blood cancers. The multiplication of cancerous cells in the bone marrow overcrowds healthy red blood cells, leading to their destruction and depletion.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why does it matter?</h3>
              <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
                <li><strong>It saves lives:</strong> Blood donation ensures that blood and its components are readily available in emergencies. This generous act has saved countless lives, and many people have attested to the profound impact donated blood has had in saving them.</li>
                <li><strong>It supports research and medical therapy:</strong> Blood donation ensures a steady supply of blood for research purposes. New therapies for safer blood transfusion, such as autologous transfusion, are being developed. Ongoing research into treatments for blood disorders is possible through donated blood.</li>
                <li><strong>It reduces death:</strong> Blood donation has led to a substantial decrease in death rates for conditions that are often fatal without a blood transfusion.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Myths and Facts about Blood Donation</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-medium text-red-600">MYTH: Blood donation takes time.</p>
                  <p className="text-gray-700">FACT: No, the actual process takes 45-60 minutes.</p>
                </div>
                
                <div>
                  <p className="font-medium text-red-600">MYTH: Blood donation would make you weak and tired.</p>
                  <p className="text-gray-700">FACTS: All donors are expected to rest and avoid strenuous activity after donation. Donors soon get replenished and can go on with their daily activities.</p>
                </div>
                
                <div>
                  <p className="font-medium text-red-600">MYTH: Blood donation is painful and should be avoided.</p>
                  <p className="text-gray-700">FACTS: Only slight discomfort is noticed, mostly when the needle is inserted, but overall, the procedure is straightforward and minimal pain is experienced.</p>
                </div>
                
                <div>
                  <p className="font-medium text-red-600">MYTH: You can only donate blood once in a lifetime.</p>
                  <p className="text-gray-700">FACTS: Donating blood is not a one-time event; as long as one is healthy, blood donation can be done 3-4 times a year.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Blood Donation Process</h3>
              <p className="mb-4 text-gray-700">The steps involved:</p>
              <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
                <li>Download the app</li>
                <li>Register and create an account</li>
                <li>Fill a form with your Personal details, health history and mode of identification</li>
                <li>Schedule an appointment and locate the donation centre</li>
                <li>Answer a few questions and take the health screening test</li>
                <li>Sit comfortably and donate blood</li>
                <li>Rest and Recovery</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Conclusion</h3>
              <p className="mb-6 text-gray-700">
                In conclusion, Blood donation is a fulfilling act, with extraordinary impact: Each donation renders help, offers hope, saves lives and unites families.
              </p>
              <p className="text-gray-700">
                Take the next step today: download our app, book your appointment, and become part of the life-saving chain. Someone out there is waiting for your help, be the reason they get to see tomorrow.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donor-signup">
              <Button size="lg" className="bg-success-green hover:bg-success-green/90 text-white px-8 py-4">
                Become a Donor
              </Button>
            </Link>
            <Link to="/hospital-signup">
              <Button size="lg" variant="outline" className="border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white px-8 py-4">
                Join as Hospital
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

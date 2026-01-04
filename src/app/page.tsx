"use client";

import { useState, FormEvent, ChangeEvent, JSX } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Award,
  Heart,
  Stethoscope,
  Scissors,
  ShoppingBag,
  Shield,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { scrollToSection } from "@/lib/utils";
import Header from "@/components/general/Header";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  petType: string;
}

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Review {
  name: string;
  rating: number;
  text: string;
}

export default function ArumaHospital() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    petType: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("sending");

    // TODO: Connect to your external REST API here
    // Example:
    // const response = await fetch('YOUR_API_ENDPOINT/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })

    // For now, simulate success
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "", petType: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const services: Service[] = [
    {
      icon: <Shield className="w-12 h-12 text-teal-600" />,
      title: "24×7 Emergency & Critical Care",
      description:
        "Round-the-clock emergency services with experienced veterinarians ready to handle critical situations.",
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-teal-600" />,
      title: "Multi-Speciality Treatment",
      description:
        "Comprehensive veterinary care covering cardiology, orthopedics, dermatology, and more.",
    },
    {
      icon: <Scissors className="w-12 h-12 text-teal-600" />,
      title: "Pet Grooming & Spa",
      description:
        "Professional grooming services including bathing, hair trimming, nail care, and spa treatments.",
    },
    {
      icon: <Heart className="w-12 h-12 text-teal-600" />,
      title: "Surgery & In-Patient Care",
      description:
        "Advanced surgical facilities with post-operative care and comfortable in-patient accommodation.",
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-teal-600" />,
      title: "Pet Food & Accessories",
      description:
        "Premium pet food, toys, accessories, and healthcare products for your beloved pets.",
    },
    {
      icon: <Award className="w-12 h-12 text-teal-600" />,
      title: "Preventive Care & Checkups",
      description:
        "Regular health checkups, vaccinations, deworming, and preventive care programs.",
    },
  ];

  const reviews: Review[] = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Excellent service! The staff is very caring and professional. My dog was treated with utmost care during an emergency. Highly recommended!",
    },
    {
      name: "Priya Menon",
      rating: 5,
      text: "Best pet hospital in Kozhikode! The doctors are experienced and the facilities are top-notch. Happy with the grooming services too.",
    },
    {
      name: "Arun Nair",
      rating: 4,
      text: "Very good hospital with 24/7 availability. The emergency care team saved my cat's life. Forever grateful to ARUMA team.",
    },
    {
      name: "Sreelakshmi S",
      rating: 5,
      text: "As a woman pet owner, I appreciate this women-owned hospital. The care and compassion shown towards pets is exceptional.",
    },
    {
      name: "Mohammed Ashraf",
      rating: 5,
      text: "Professional staff, clean facilities, and reasonable pricing. My pet always receives the best treatment here.",
    },
    {
      name: "Anjali Krishnan",
      rating: 4,
      text: "Great experience with the surgery department. Post-operative care was excellent and my dog recovered quickly.",
    },
  ];

  const galleryImages: string[] = [
    "https://images.unsplash.com/photo-1688092807693-fd1c1a30c6c1",
    "https://images.pexels.com/photos/6235660/pexels-photo-6235660.jpeg",
    "https://images.pexels.com/photos/7474549/pexels-photo-7474549.jpeg",
    "https://images.unsplash.com/photo-1719464454959-9cf304ef4774",
    "https://images.unsplash.com/photo-1534361960057-19889db9621e",
    "https://images.unsplash.com/photo-1559190394-df5a28aab5c5",
    "https://images.unsplash.com/photo-1644675443401-ea4c14bad0e6",
    "https://images.unsplash.com/photo-1528846104175-4fd300ee59da",
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-teal-50 to-white">
      {/* Navigation */}
      <Header />
      {/* Hero Section */}
      <section id="home" className="relative h-150 flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1688092807693-fd1c1a30c6c1"
            alt="ARUMA Pet Hospital"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center bg-red-600 px-4 py-2 rounded-full mb-4">
              <Clock className="w-3 h-3 md:w-5 md:h-5 mr-2" />
              <span className="font-semibold text-xs md:text-sm">
                OPEN 24 HOURS – EMERGENCY CARE AVAILABLE
              </span>
            </div>
            <h1 className="text-[2rem] md:text-6xl font-bold mb-4">
              Compassionate Care for Your Beloved Pets
            </h1>
            <p className="text-xl mb-6">
              Kerala's Trusted Women-Owned Multi-Speciality Pet Hospital
            </p>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 opacity-50" />
              </div>
              <span className="text-lg">4.1 ★ (1,000+ Reviews)</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white"
                onClick={() => window.open("tel:+916282693066")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now – 24×7 Emergency
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-teal-600 hover:bg-teal-50"
                onClick={() => scrollToSection("contact")}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600">24/7</div>
              <div className="text-gray-600">Emergency Care</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600">1000+</div>
              <div className="text-gray-600">Happy Pet Owners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600">4.1★</div>
              <div className="text-gray-600">Google Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 bg-linear-to-b from-white to-teal-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.pexels.com/photos/7474549/pexels-photo-7474549.jpeg"
                alt="Caring veterinary staff"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-teal-800 mb-6">
                About ARUMA Multi-Speciality Pet Hospital
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-teal-600">
                    ARUMA Multi-Speciality Pet Hospital
                  </strong>{" "}
                  is a proudly women-owned veterinary care center located in the
                  heart of Kozhikode, Kerala. We are dedicated to providing
                  compassionate, high-quality medical care for your beloved pets
                  around the clock.
                </p>
                <p>
                  Our state-of-the-art facility near Malikkadav Bridge offers
                  comprehensive veterinary services ranging from routine
                  checkups to advanced surgical procedures. With a team of
                  experienced veterinarians and trained support staff, we ensure
                  that every pet receives personalized attention and the best
                  possible treatment.
                </p>
                <p>
                  <strong>Our Mission:</strong> To be Kerala's most trusted pet
                  healthcare provider by combining medical excellence with
                  genuine compassion. We treat every pet as a member of our own
                  family.
                </p>
                <p>
                  <strong>Our Values:</strong> Compassion, Excellence,
                  Integrity, and 24×7 Availability. We maintain the highest
                  standards of hygiene and use advanced medical equipment to
                  ensure optimal care for your furry friends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-gray-600 text-lg">
              Complete veterinary care under one roof
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-600"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-teal-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Images */}
      <section className="py-16 bg-linear-to-b from-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/6235660/pexels-photo-6235660.jpeg"
                alt="Medical examination"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white font-semibold text-lg p-4">
                  Advanced Diagnostics
                </p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1719464454959-9cf304ef4774"
                alt="Pet grooming"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white font-semibold text-lg p-4">
                  Professional Grooming
                </p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1644675443401-ea4c14bad0e6"
                alt="Veterinary care"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white font-semibold text-lg p-4">
                  Expert Medical Care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              What Pet Owners Say
            </h2>
            <p className="text-gray-600 text-lg">
              Trusted by 1,000+ happy pet families
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-teal-700">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-16 bg-linear-to-b from-white to-teal-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Our Gallery
            </h2>
            <p className="text-gray-600 text-lg">
              A glimpse into our hospital and happy pets
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={img}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 text-lg">We're here for you 24/7</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-l-4 border-teal-600">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Address</h3>
                      <p className="text-gray-600">
                        Near Malikkadav Bridge
                        <br />
                        Moorikkara Road
                        <br />
                        Kozhikode, Kerala 673010
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-teal-600">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <a
                        href="tel:+916282693066"
                        className="text-teal-600 hover:text-teal-700 text-xl font-semibold"
                      >
                        062826 93066
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-teal-600">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Working Hours
                      </h3>
                      <p className="font-semibold text-xl text-teal-600">
                        Open 24 Hours
                      </p>
                      <p className="text-gray-600">
                        Emergency services available round the clock
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.7894!2d75.7974!3d11.2588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE1JzMxLjciTiA3NcKwNDcnNTAuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-l-4 border-teal-600">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-teal-800 mb-6">
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        name="petType"
                        placeholder="Pet Type (Dog/Cat/Other)"
                        value={formData.petType}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                      disabled={submitStatus === "sending"}
                    >
                      {submitStatus === "sending"
                        ? "Sending..."
                        : "Submit Message"}
                    </Button>
                    {submitStatus === "success" && (
                      <p className="text-green-600 text-center font-semibold">
                        ✓ Message sent successfully!
                      </p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-red-600 text-center font-semibold">
                        × Failed to send. Please try again.
                      </p>
                    )}
                  </form>
                  {/* <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> To connect this form to your REST
                      API, update the{" "}
                      <code className="bg-blue-100 px-1 rounded">
                        handleSubmit
                      </code>{" "}
                      function in{" "}
                      <code className="bg-blue-100 px-1 rounded">page.tsx</code>
                    </p>
                  </div> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-8 h-8" />
                <div>
                  <h3 className="text-2xl font-bold">ARUMA</h3>
                  <p className="text-sm text-teal-200">
                    Multi-Speciality Pet Hospital
                  </p>
                </div>
              </div>
              <p className="text-teal-200">
                Kerala's trusted women-owned pet healthcare provider, serving
                the community with compassion and excellence since 2014.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-teal-200">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white transition"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("reviews")}
                    className="hover:text-white transition"
                  >
                    Reviews
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition"
                  >
                    Contact
                  </button>
                </li>
                {/* <li>
                  <a
                    // href="https://arumapethospital.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Visit Website
                  </a>
                </li> */}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-teal-200">
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" /> 062826 93066
                </p>
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" /> Malikkadav Bridge,
                  Kozhikode
                </p>
                <p className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" /> Open 24 Hours
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-teal-800 mt-8 pt-8 text-center text-teal-200">
            <p>
              &copy; 2025 ARUMA Multi-Speciality Pet Hospital. All rights
              reserved.
            </p>
            <p className="mt-2">
              Proudly serving pet families in Kozhikode, Kerala
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

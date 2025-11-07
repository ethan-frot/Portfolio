"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { ContactFormData } from "@/types";
import ContactInput from "@/components/ContactInput";
import InquiryOption from "@/components/InquiryOption";
import { MoveLeft, MoveRight } from "lucide-react";
import {
  textRevealVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/utils/animations";

type InquiryType = "project" | "collaboration" | "other";

export default function ContactPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [highestStep, setHighestStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [navigationCount, setNavigationCount] = useState(0);
  const [awaitingTransition, setAwaitingTransition] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    inquiryType: "" as InquiryType,
  });

  useEffect(() => {
    if (isSubmitted && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (isSubmitted && countdown === 0) {
      router.push("/");
    }
  }, [isSubmitted, countdown, router]);

  const handleInquiryTypeSelect = (type: InquiryType) => {
    setFormData({ ...formData, inquiryType: type });
    // Indiquer qu'on attend une transition vers la prochaine étape
    setAwaitingTransition(true);
  };

  const handleCircleFillComplete = () => {
    // Appelé quand l'animation du cercle est terminée
    // Seulement changer de step si on attend vraiment une transition
    if (awaitingTransition) {
      setAwaitingTransition(false);
      setStep(2);
      setHighestStep((prev) => Math.max(prev, 2));
    }
  };

  const handleBack = () => {
    const newStep = step - 1;
    setStep(newStep);
    setNavigationCount((prev) => prev + 1);

    // Si on revient au step 1, réinitialiser tout le formulaire
    if (newStep === 1) {
      setFormData({
        name: "",
        email: "",
        message: "",
        inquiryType: "" as InquiryType,
      });
      setHighestStep(1);
    }
  };

  const handleNext = () => {
    const nextStep = step + 1;
    setStep(nextStep);
    setHighestStep((prev) => Math.max(prev, nextStep));
    setNavigationCount((prev) => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="flex h-[calc(100vh-6rem)] md:h-[calc(100vh-7.5rem)] items-center justify-center px-6 md:px-12 overflow-hidden">
      <div className="w-full max-w-4xl">
        {/* Success Message */}
        {isSubmitted ? (
          <motion.div
            className="text-center"
            variants={staggerContainerVariants}
            initial="initial"
            animate="animate"
          >
            <div className="overflow-hidden mb-6">
              <motion.h2
                className="text-4xl md:text-5xl font-medium"
                variants={staggerItemVariants}
              >
                Merci pour votre message !
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-4">
              <motion.p
                className="text-xl font-light opacity-70"
                variants={staggerItemVariants}
              >
                Je vous répondrai dans les plus brefs délais.
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                className="text-lg font-light opacity-60"
                variants={staggerItemVariants}
              >
                Redirection vers la page d&apos;accueil dans{" "}
                <span className="font-medium text-2xl">{countdown}</span> seconde{countdown > 1 ? "s" : ""}...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <>
            <AnimatePresence mode="wait">
            {/* Step 1: Inquiry Type */}
            {step === 1 && (
          <motion.div
            key="step1"
            variants={staggerContainerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="mb-12">
              <div className="overflow-hidden">
                <motion.h1 className="mb-2 text-2xl font-medium tracking-tight" variants={staggerItemVariants}>
                  Discutons
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.p className="text-sm font-light opacity-60" variants={staggerItemVariants}>
                  Entamez une conversation autour de nouvelles opportunités professionnelles ou de collaboration.
                </motion.p>
              </div>
            </div>
            <div className="space-y-6">
              <InquiryOption
                label="Nouvelle demande de projet"
                isSelected={formData.inquiryType === "project"}
                onClick={() => handleInquiryTypeSelect("project")}
                onAnimationComplete={handleCircleFillComplete}
              />

              <InquiryOption
                label="Opportunité de collaboration"
                isSelected={formData.inquiryType === "collaboration"}
                onClick={() => handleInquiryTypeSelect("collaboration")}
                onAnimationComplete={handleCircleFillComplete}
              />

              <InquiryOption
                label="Autre chose ?"
                isSelected={formData.inquiryType === "other"}
                onClick={() => handleInquiryTypeSelect("other")}
                onAnimationComplete={handleCircleFillComplete}
              />
            </div>
          </motion.div>
        )}

        {/* Step 2: Name */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="mb-2 overflow-hidden">
              <motion.div
                className="flex items-center gap-4"
                variants={textRevealVariants}
              >
                <button
                  onClick={handleBack}
                  className="text-[rgb(var(--foreground))] hover:opacity-70 transition-opacity cursor-pointer"
                  aria-label="Retour"
                >
                  <MoveLeft size={20} />
                </button>
                <span className="text-sm font-light opacity-60">1/3</span>
                {highestStep > 2 && (
                  <button
                    onClick={handleNext}
                    className="text-[rgb(var(--foreground))] hover:opacity-70 transition-opacity cursor-pointer"
                    aria-label="Suivant"
                  >
                    <MoveRight size={20} />
                  </button>
                )}
              </motion.div>
            </div>
            <div>
              <div className="mb-12 overflow-hidden">
                <motion.label
                  htmlFor="name"
                  className="block text-2xl font-medium"
                  variants={textRevealVariants}
                >
                  Quel est votre nom ?
                </motion.label>
              </div>
              <ContactInput
                key={`name-input-${navigationCount}`}
                type="text"
                id="name"
                value={formData.name}
                onChange={(value) => setFormData({ ...formData, name: value })}
                onNext={handleNext}
                placeholder="Votre nom"
                showArrowButton={true}
                showEnterHint={true}
                autoFocus={true}
                allowEnterKey={true}
              />
            </div>
          </motion.div>
        )}

        {/* Step 3: Email */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="mb-2 overflow-hidden">
              <motion.div
                className="flex items-center gap-4"
                variants={textRevealVariants}
              >
                <button
                  onClick={handleBack}
                  className="text-[rgb(var(--foreground))] hover:opacity-70 transition-opacity cursor-pointer"
                  aria-label="Retour"
                >
                  <MoveLeft size={20} />
                </button>
                <span className="text-sm font-light opacity-60">2/3</span>
                {highestStep > 3 && (
                  <button
                    onClick={handleNext}
                    className="text-[rgb(var(--foreground))] hover:opacity-70 transition-opacity cursor-pointer"
                    aria-label="Suivant"
                  >
                    <MoveRight size={20} />
                  </button>
                )}
              </motion.div>
            </div>
            <div>
              <div className="mb-12 overflow-hidden">
                <motion.label
                  htmlFor="email"
                  className="block text-2xl font-medium"
                  variants={textRevealVariants}
                >
                  Quelle est votre adresse email ?
                </motion.label>
              </div>
              <ContactInput
                key={`email-input-${navigationCount}`}
                type="email"
                id="email"
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })}
                onNext={handleNext}
                placeholder="votre@email.com"
                showArrowButton={true}
                showEnterHint={true}
                autoFocus={true}
                allowEnterKey={true}
              />
            </div>
          </motion.div>
        )}

        {/* Step 4: Message */}
        {step === 4 && (
          <motion.form
            key="step4"
            onSubmit={handleSubmit}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="mb-2 overflow-hidden">
              <motion.div
                className="flex items-center gap-4"
                variants={textRevealVariants}
              >
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-[rgb(var(--foreground))] hover:opacity-70 transition-opacity cursor-pointer"
                  aria-label="Retour"
                >
                  <MoveLeft size={20} />
                </button>
                <span className="text-sm font-light opacity-60">3/3</span>
              </motion.div>
            </div>
            <div>
              <div className="mb-12 overflow-hidden">
                <motion.label
                  htmlFor="message"
                  className="block text-2xl font-medium"
                  variants={textRevealVariants}
                >
                  Parlez-moi de votre projet
                </motion.label>
              </div>
              <div className="relative">
                <ContactInput
                  key={`message-input-${navigationCount}`}
                  type="textarea"
                  id="message"
                  value={formData.message}
                  onChange={(value) => setFormData({ ...formData, message: value })}
                  placeholder="Décrivez votre projet..."
                  showArrowButton={false}
                  showEnterHint={false}
                  autoFocus={true}
                  allowEnterKey={false}
                />
                <AnimatePresence>
                {formData.message && (
                  <div className="absolute left-0 right-0 top-full mt-6 flex justify-center overflow-hidden">
                    <motion.button
                      type="submit"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="px-8 py-3 bg-[rgb(var(--foreground))] text-[rgb(var(--background))] rounded-full font-medium hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      Envoyer
                    </motion.button>
                  </div>
                )}
                </AnimatePresence>
              </div>
            </div>
          </motion.form>
        )}
          </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
}

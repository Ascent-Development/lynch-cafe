"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReservasPage() {
  // Calendar state
  const today = useMemo(() => new Date(), []);
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0-indexed
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Form State
  const [selectedPersons, setSelectedPersons] = useState<string>("2 personas");
  const [selectedTime, setSelectedTime] = useState<string>("19:00");
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1); // 1: Select, 2: Form, 3: Success

  // Customer info in step 2
  const [countryCode, setCountryCode] = useState("+51");
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    celular: "",
    correo: "",
    requisitos: "",
  });
  const [hasAllergies, setHasAllergies] = useState(false);
  const [allergyDetails, setAllergyDetails] = useState("");
  const [acceptPrivacy, setAcceptPrivacy] = useState(true);
  const [acceptMarketing, setAcceptMarketing] = useState(false);
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Auto-select tomorrow on initial load
  useEffect(() => {
    const nextDay = new Date();
    nextDay.setDate(today.getDate() + 1);
    setSelectedDate(nextDay);
  }, [today]);

  // Calendar calculations
  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const dayHeaders = ["L", "M", "Mi", "J", "V", "S", "D"];

  const calendarDays = useMemo(() => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    // Monday as first day of week (0: Sun -> 6, 1: Mon -> 0)
    let startDay = firstDayOfMonth.getDay() - 1;
    if (startDay === -1) startDay = 6;

    const daysInMonth = lastDayOfMonth.getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

    const days = [];

    // Previous month filler days
    for (let i = startDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        date: new Date(currentYear, currentMonth - 1, daysInPrevMonth - i),
        isPast: true,
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const isPast =
        date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      days.push({
        day: i,
        isCurrentMonth: true,
        date,
        isPast,
      });
    }

    // Next month filler days to complete grid (multiples of 7)
    const remainingDays = (7 - (days.length % 7)) % 7;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(currentYear, currentMonth + 1, i),
        isPast: false,
      });
    }

    return days;
  }, [currentYear, currentMonth, today]);

  const handlePrevMonth = () => {
    if (
      currentYear === today.getFullYear() &&
      currentMonth <= today.getMonth()
    ) {
      return; // cannot go to past months
    }
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const isSameDay = (d1: Date | null, d2: Date) => {
    if (!d1) return false;
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  // Time slots every 30 mins
  const timeSlots = [
    "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00",
    "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
    "21:00", "21:30", "22:00", "22:30"
  ];

  // Countries for phone selector
  const countryOptions = [
    { code: "+51", label: "🇵🇪 Perú (+51)" },
    { code: "+1", label: "🇺🇸 Estados Unidos (+1)" },
    { code: "+34", label: "🇪🇸 España (+34)" },
    { code: "+56", label: "🇨🇱 Chile (+56)" },
    { code: "+57", label: "🇨🇴 Colombia (+57)" },
    { code: "+52", label: "🇲🇽 México (+52)" },
    { code: "+54", label: "🇦🇷 Argentina (+54)" },
    { code: "+593", label: "🇪🇨 Ecuador (+593)" },
    { code: "+591", label: "🇧🇴 Bolivia (+591)" },
    { code: "+55", label: "🇧🇷 Brasil (+55)" },
  ];

  // Handle submit in Step 2
  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isRobotChecked || !acceptPrivacy) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(3);
    }, 1000);
  };

  const handleResetFlow = () => {
    setCurrentStep(1);
    setFormData({ nombres: "", apellidos: "", celular: "", correo: "", requisitos: "" });
    setHasAllergies(false);
    setAllergyDetails("");
    setIsRobotChecked(false);
  };

  const formattedDateString = useMemo(() => {
    if (!selectedDate) return "";
    const day = String(selectedDate.getDate()).padStart(2, "0");
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const year = selectedDate.getFullYear();
    return `${day}-${month}-${year}`;
  }, [selectedDate]);

  return (
    <main className="min-h-screen bg-[#FAF9F7] text-[#2A282A] select-none">
      {/* Header */}
      <Header />

      {/* ── SECCIÓN 1: HERO BANNER ── */}
      <section className="relative h-[320px] sm:h-[380px] w-full flex items-center justify-center overflow-hidden bg-[#181618]">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-lynch.jpg"
            alt="Ambiente Lynch Café Chacarilla"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#181618]" />
        </div>

        {/* Centered Hero Title */}
        <div className="relative z-10 text-center px-6 pt-14">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase leading-none">
            Haz tu <span className="text-[#BC1C19]">Reserva</span>
          </h1>
          <div className="w-14 sm:w-16 h-1 bg-[#BC1C19] mx-auto mt-3 rounded-full" />
        </div>
      </section>

      {/* ── SECCIÓN PRINCIPAL DE RESERVAS ── */}
      <section className="py-10 sm:py-14 md:py-16 relative overflow-hidden bg-white">
        
        {/* Decorative Top-Left Coffee Cup (cafe-taza.png) */}
        <div className="absolute top-2 sm:top-6 left-3 sm:left-8 md:left-12 w-32 sm:w-44 md:w-52 h-32 sm:h-44 md:h-52 pointer-events-none opacity-85 z-0">
          <Image
            src="/reservas/cafe-taza.png"
            alt="Taza de Café Lynch decorativa"
            fill
            sizes="208px"
            className="object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
          />
        </div>

        {/* Decorative Bottom-Right Coffee Beans (cafe-beams.png) */}
        <div className="absolute bottom-2 sm:bottom-6 right-3 sm:right-8 md:right-12 w-32 sm:w-44 md:w-52 h-32 sm:h-44 md:h-52 pointer-events-none opacity-85 z-0">
          <Image
            src="/reservas/cafe-beams.png"
            alt="Granos de Café Lynch decorativo"
            fill
            sizes="208px"
            className="object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
          />
        </div>

        <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
          
          {/* The 3 Steps with Directional Arrows */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12">
            
            {/* Paso 1 */}
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <div className="relative mb-3">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white border-2 border-[#BC1C19] shadow-sm flex items-center justify-center p-4">
                  <Image
                    src="/reservas/hour-1.svg"
                    alt="Ícono Paso 1"
                    width={40}
                    height={40}
                    className="object-contain filter invert"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-black text-white text-[11px] font-bold flex items-center justify-center shadow-md">
                  1
                </div>
              </div>
              <h4 className="text-[13px] sm:text-[14px] font-bold text-[#2A282A] leading-snug">
                Escoge la fecha, hora y mesa
              </h4>
            </div>

            {/* Arrow 1 -> 2 */}
            <div className="text-[#BC1C19] text-xl font-bold md:rotate-0 rotate-90 my-1 md:my-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Paso 2 */}
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <div className="relative mb-3">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white border-2 border-[#BC1C19] shadow-sm flex items-center justify-center p-4">
                  <Image
                    src="/reservas/live-music-1.svg"
                    alt="Ícono Paso 2"
                    width={40}
                    height={40}
                    className="object-contain filter invert"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-black text-white text-[11px] font-bold flex items-center justify-center shadow-md">
                  2
                </div>
              </div>
              <h4 className="text-[13px] sm:text-[14px] font-bold text-[#2A282A] leading-snug">
                Recibe tu reserva por correo electrónico
              </h4>
            </div>

            {/* Arrow 2 -> 3 */}
            <div className="text-[#BC1C19] text-xl font-bold md:rotate-0 rotate-90 my-1 md:my-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Paso 3 */}
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <div className="relative mb-3">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white border-2 border-[#BC1C19] shadow-sm flex items-center justify-center p-4">
                  <Image
                    src="/reservas/calendar-1.svg"
                    alt="Ícono Paso 3"
                    width={40}
                    height={40}
                    className="object-contain filter invert"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-black text-white text-[11px] font-bold flex items-center justify-center shadow-md">
                  3
                </div>
              </div>
              <h4 className="text-[13px] sm:text-[14px] font-bold text-[#2A282A] leading-snug">
                Disfruta de nuestro menú
              </h4>
            </div>

          </div>

          {/* 3. Main Booking Card */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#FAF9F7] rounded-2xl border border-[#2A282A]/10 shadow-[0_12px_40px_rgba(0,0,0,0.05)] p-5 sm:p-8 md:p-10 overflow-hidden transition-all duration-500">
            
              {/* Header: Local info */}
              <div className="text-center pb-6 border-b border-[#2A282A]/10 mb-6">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#BC1C19] block mb-0.5">
                  Local Chacarilla
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#2A282A]">
                  Lynch Café · Av. del Pinar 135, Surco
                </h3>
              </div>

              {/* ── PASO 1: SELECCIÓN DE FECHA, HORA Y PERSONAS (Hasta 20 pax) ── */}
              {currentStep === 1 && (
                <div className="animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
                    
                    {/* Left Col (~50% / 6 cols): Monthly Interactive Calendar */}
                    <div className="md:col-span-6 bg-white p-4 sm:p-5 rounded-xl border border-[#2A282A]/8 shadow-sm">
                      {/* Calendar Month & Year Header with Arrows */}
                      <div className="flex items-center justify-between mb-3 px-1">
                        <button
                          type="button"
                          onClick={handlePrevMonth}
                          aria-label="Mes anterior"
                          className="w-7 h-7 rounded-full hover:bg-black/5 flex items-center justify-center text-[#2A282A] font-bold transition-colors cursor-pointer"
                        >
                          ‹
                        </button>

                        <span className="text-[14px] sm:text-[15px] font-bold text-[#2A282A] capitalize">
                          {monthNames[currentMonth]} {currentYear}
                        </span>

                        <button
                          type="button"
                          onClick={handleNextMonth}
                          aria-label="Mes siguiente"
                          className="w-7 h-7 rounded-full hover:bg-black/5 flex items-center justify-center text-[#2A282A] font-bold transition-colors cursor-pointer"
                        >
                          ›
                        </button>
                      </div>

                      {/* Day Headers (L M Mi J V S D) */}
                      <div className="grid grid-cols-7 gap-1 text-center mb-1">
                        {dayHeaders.map((dh) => (
                          <span
                            key={dh}
                            className="text-[11px] font-bold text-[#2A282A]/60 py-0.5"
                          >
                            {dh}
                          </span>
                        ))}
                      </div>

                      {/* Day Cells */}
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {calendarDays.map((d, index) => {
                          const isSelected = isSameDay(selectedDate, d.date);
                          const disabled = d.isPast || !d.isCurrentMonth;

                          return (
                            <button
                              key={index}
                              type="button"
                              disabled={disabled}
                              onClick={() => setSelectedDate(d.date)}
                              className={`h-8 w-8 mx-auto rounded-full flex items-center justify-center text-[12px] font-semibold transition-all duration-200 ${
                                isSelected
                                  ? "bg-[#BC1C19] text-white shadow-md font-bold scale-105"
                                  : disabled
                                  ? "text-[#2A282A]/25 cursor-not-allowed"
                                  : "text-[#2A282A] hover:bg-[#BC1C19]/15 hover:text-[#BC1C19] cursor-pointer"
                              }`}
                            >
                              {d.day}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Col (~50% / 6 cols): Persons (Up to 20 pax), Time & Reservar Button */}
                    <div className="md:col-span-6 flex flex-col justify-between space-y-5">
                      
                      {/* Select Personas: Up to 20 */}
                      <div>
                        <label className="block text-[11px] font-bold tracking-wider uppercase text-[#2A282A] mb-1.5">
                          Personas
                        </label>
                        <select
                          value={selectedPersons}
                          onChange={(e) => setSelectedPersons(e.target.value)}
                          className="w-full bg-white border border-[#2A282A]/15 rounded-lg px-3.5 py-2.5 text-[14px] text-[#2A282A] font-semibold focus:outline-none focus:border-[#BC1C19] cursor-pointer transition-colors shadow-sm"
                        >
                          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                            <option key={num} value={`${num} persona${num > 1 ? "s" : ""}`}>
                              {num} persona{num > 1 ? "s" : ""}
                            </option>
                          ))}
                        </select>
                        <span className="text-[10px] text-[#2A282A]/60 mt-1 block">
                          Solicitud de grupo. A partir de 15 pax.
                        </span>
                      </div>

                      {/* Select Hora */}
                      <div>
                        <label className="block text-[11px] font-bold tracking-wider uppercase text-[#2A282A] mb-1.5">
                          Hora
                        </label>
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full bg-white border border-[#2A282A]/15 rounded-lg px-3.5 py-2.5 text-[14px] text-[#2A282A] font-semibold focus:outline-none focus:border-[#BC1C19] cursor-pointer transition-colors shadow-sm"
                        >
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time} hrs
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Summary Info */}
                      <div className="p-3 rounded-lg bg-white border border-[#2A282A]/8 text-[12px] text-[#2A282A]/80 shadow-sm">
                        <strong>Fecha seleccionada:</strong> {formattedDateString || "Selecciona un día"}
                      </div>

                      {/* Step 1 Submit Button: RESERVAR */}
                      <button
                        type="button"
                        disabled={!selectedDate}
                        onClick={() => setCurrentStep(2)}
                        className={`w-full py-3.5 rounded-lg bg-[#BC1C19] text-white font-extrabold text-[12px] sm:text-[13px] tracking-[0.16em] uppercase transition-all duration-300 shadow-[0_4px_16px_rgba(188,28,25,0.25)] hover:bg-[#a01614] cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 ${
                          !selectedDate ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        RESERVAR
                      </button>

                    </div>

                  </div>
                </div>
              )}

              {/* ── PASO 2: DATOS DEL CLIENTE Y CONFIRMACIÓN CON SELECTOR DE PAÍS Y ALERGIAS CONDICIONAL ── */}
              {currentStep === 2 && (
                <form onSubmit={handleSubmitBooking} className="animate-fadeIn space-y-5">
                  
                  {/* Summary Bar */}
                  <div className="flex items-center justify-between pb-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="inline-flex items-center gap-1 text-[12px] font-bold text-[#BC1C19] hover:underline cursor-pointer"
                    >
                      ‹ Volver
                    </button>
                    <div className="text-[12px] sm:text-[13px] font-bold text-[#2A282A]">
                      {formattedDateString} | {selectedTime} hrs | {selectedPersons}
                    </div>
                  </div>
                  <div className="w-full h-[1.5px] bg-[#BC1C19] mb-4" />

                  {/* Form Fields Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nombres */}
                    <div>
                      <label className="block text-[11px] font-bold text-[#2A282A] uppercase tracking-wider mb-1">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nombre"
                        value={formData.nombres}
                        onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
                        className="w-full bg-white border border-[#2A282A]/20 rounded-md px-3.5 py-2.5 text-[13px] text-[#2A282A] focus:outline-none focus:border-[#BC1C19] transition-colors"
                      />
                    </div>

                    {/* Apellidos */}
                    <div>
                      <label className="block text-[11px] font-bold text-[#2A282A] uppercase tracking-wider mb-1">
                        Apellidos *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Apellidos"
                        value={formData.apellidos}
                        onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                        className="w-full bg-white border border-[#2A282A]/20 rounded-md px-3.5 py-2.5 text-[13px] text-[#2A282A] focus:outline-none focus:border-[#BC1C19] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-bold text-[#2A282A] uppercase tracking-wider mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={formData.correo}
                        onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        className="w-full bg-white border border-[#2A282A]/20 rounded-md px-3.5 py-2.5 text-[13px] text-[#2A282A] focus:outline-none focus:border-[#BC1C19] transition-colors"
                      />
                    </div>

                    {/* Teléfono con selector de país */}
                    <div>
                      <label className="block text-[11px] font-bold text-[#2A282A] uppercase tracking-wider mb-1">
                        Teléfono (WhatsApp) *
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="w-32 bg-white border border-[#2A282A]/20 rounded-md px-2 py-2.5 text-[12px] font-medium text-[#2A282A] focus:outline-none focus:border-[#BC1C19] cursor-pointer"
                        >
                          {countryOptions.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.label}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          required
                          placeholder="Teléfono"
                          value={formData.celular}
                          onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
                          className="flex-1 bg-white border border-[#2A282A]/20 rounded-md px-3.5 py-2.5 text-[13px] text-[#2A282A] focus:outline-none focus:border-[#BC1C19] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Pregunta Alergias / Intolerancias */}
                    <div className="sm:col-span-2 p-3.5 bg-white rounded-md border border-[#2A282A]/15">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span className="text-[12px] font-bold text-[#2A282A]">
                          ¿Tiene algún comensal alguna intolerancia/alergia?
                        </span>
                        <div className="flex items-center gap-5">
                          <label className="inline-flex items-center gap-1.5 text-[13px] font-medium cursor-pointer">
                            <input
                              type="radio"
                              name="alergiasRadio"
                              checked={hasAllergies === true}
                              onChange={() => setHasAllergies(true)}
                              className="accent-[#BC1C19] w-4 h-4 cursor-pointer"
                            />
                            <span>Sí</span>
                          </label>
                          <label className="inline-flex items-center gap-1.5 text-[13px] font-medium cursor-pointer">
                            <input
                              type="radio"
                              name="alergiasRadio"
                              checked={hasAllergies === false}
                              onChange={() => {
                                setHasAllergies(false);
                                setAllergyDetails("");
                              }}
                              className="accent-[#BC1C19] w-4 h-4 cursor-pointer"
                            />
                            <span>No</span>
                          </label>
                        </div>
                      </div>

                      {/* Campo condicional de Alérgenos */}
                      {hasAllergies && (
                        <div className="mt-3 pt-3 border-t border-[#2A282A]/10 animate-fadeIn">
                          <label className="block text-[11px] font-bold text-[#BC1C19] uppercase tracking-wider mb-1">
                            Alérgenos / Intolerancias *
                          </label>
                          <textarea
                            rows={2}
                            required
                            placeholder="Por favor indícanos qué alérgenos o intolerancias debemos tener en cuenta (ej. gluten, frutos secos, mariscos, etc.)"
                            value={allergyDetails}
                            onChange={(e) => setAllergyDetails(e.target.value)}
                            className="w-full bg-[#FAF9F7] border border-[#BC1C19]/30 rounded-md px-3 py-2 text-[12px] text-[#2A282A] focus:outline-none focus:border-[#BC1C19] transition-colors resize-none"
                          />
                        </div>
                      )}
                    </div>

                    {/* Requisitos específicos */}
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-bold text-[#2A282A] uppercase tracking-wider mb-1">
                        Requisitos específicos (Opcional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="¿Alguna celebración, preferencia de mesa o requerimiento especial?"
                        value={formData.requisitos}
                        onChange={(e) => setFormData({ ...formData, requisitos: e.target.value })}
                        className="w-full bg-white border border-[#2A282A]/20 rounded-md px-3.5 py-2 text-[13px] text-[#2A282A] focus:outline-none focus:border-[#BC1C19] transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Checkboxes de Políticas & Marketing */}
                  <div className="space-y-2 pt-1 text-[12px] text-[#2A282A]/80">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={acceptPrivacy}
                        onChange={(e) => setAcceptPrivacy(e.target.checked)}
                        className="mt-0.5 accent-[#BC1C19] w-4 h-4 cursor-pointer"
                      />
                      <span>
                        Acepto el <span className="text-[#BC1C19] underline">Tratamiento de Datos y Política de Privacidad</span> *
                      </span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={acceptMarketing}
                        onChange={(e) => setAcceptMarketing(e.target.checked)}
                        className="mt-0.5 accent-[#BC1C19] w-4 h-4 cursor-pointer"
                      />
                      <span>
                        Quiero recibir información comercial y novedades del restaurante por mail y SMS
                      </span>
                    </label>
                  </div>

                  {/* Legal Text */}
                  <div className="p-3 bg-white rounded-md border border-[#2A282A]/10 text-[11px] text-[#2A282A]/70 leading-relaxed space-y-1">
                    <p>
                      * En un plazo máximo de 24 horas, estaremos contactándonos con usted vía WhatsApp para confirmar su reserva, según disponibilidad de mesas.
                    </p>
                    <p>
                      ** Tener en cuenta que para las reservas tenemos un tiempo de tolerancia de 10 minutos, pasado ese tiempo la reserva pasa a ser inválida.
                    </p>
                  </div>

                  {/* Decorative Captcha Checkbox */}
                  <div className="flex items-center gap-2.5 p-2.5 bg-white border border-[#2A282A]/15 rounded-md max-w-xs shadow-sm">
                    <input
                      type="checkbox"
                      id="robotCheck"
                      checked={isRobotChecked}
                      onChange={(e) => setIsRobotChecked(e.target.checked)}
                      className="w-4 h-4 accent-[#BC1C19] cursor-pointer"
                    />
                    <label htmlFor="robotCheck" className="text-[12px] font-semibold text-[#2A282A] cursor-pointer select-none">
                      No soy un robot
                    </label>
                  </div>

                  {/* Final Submit Button - Centered and Moderately Sized */}
                  <div className="flex justify-center pt-2">
                    <button
                      type="submit"
                      disabled={!isRobotChecked || !acceptPrivacy || isLoading}
                      className={`w-full sm:w-auto px-10 sm:px-14 py-3.5 rounded-lg bg-[#BC1C19] text-white font-extrabold text-[12px] sm:text-[13px] tracking-[0.16em] uppercase transition-all duration-300 shadow-[0_4px_16px_rgba(188,28,25,0.25)] hover:bg-[#a01614] flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 ${
                        !isRobotChecked || !acceptPrivacy || isLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>REGISTRANDO RESERVA...</span>
                        </>
                      ) : (
                        <span>RESERVA UNA MESA</span>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[10px] text-[#2A282A]/60">
                    Haciendo clic en reservar se aceptan los Términos y Condiciones del servicio
                  </p>

                </form>
              )}

              {/* ── PASO 3: CONFIRMACIÓN DE SOLICITUD ── */}
              {currentStep === 3 && (
                <div className="text-center py-6 sm:py-10 animate-fadeIn space-y-5">
                  <div className="w-16 h-16 bg-emerald-500/10 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#BC1C19] block mb-1">
                      Solicitud Exitosa
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#2A282A]">
                      ¡Listo! Tu solicitud de reserva fue registrada.
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-[#2A282A]/75 mt-1.5 max-w-md mx-auto">
                      Te contactaremos por WhatsApp en menos de 24 horas para confirmar la disponibilidad de tu mesa.
                    </p>
                  </div>

                  {/* Summary box */}
                  <div className="max-w-md mx-auto bg-white p-4 rounded-xl border border-[#2A282A]/10 text-left text-[12px] space-y-1 shadow-sm">
                    <div><strong>Local:</strong> Lynch Chacarilla (Av. del Pinar 135)</div>
                    <div><strong>Fecha:</strong> {formattedDateString}</div>
                    <div><strong>Hora:</strong> {selectedTime} hrs</div>
                    <div><strong>Mesa para:</strong> {selectedPersons}</div>
                    <div><strong>A nombre de:</strong> {formData.nombres} {formData.apellidos}</div>
                    <div><strong>Teléfono:</strong> {countryCode} {formData.celular}</div>
                    {hasAllergies && allergyDetails && (
                      <div><strong>Alérgenos:</strong> {allergyDetails}</div>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleResetFlow}
                      className="inline-flex items-center justify-center px-7 py-3 bg-[#2A282A] text-white font-bold text-[11px] tracking-[0.14em] uppercase rounded-lg hover:bg-[#BC1C19] transition-colors cursor-pointer"
                    >
                      Hacer otra reserva
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

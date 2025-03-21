
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from 'date-fns';
import { CalendarIcon, Clock, Users } from 'lucide-react';

const Reservation = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('2');
  const [time, setTime] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ];

  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !name || !email || !phone || !guests) {
      toast.error('Please fill all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Reservation request received! We will contact you shortly to confirm.');
      setIsSubmitting(false);
      
      // Reset form
      setDate(undefined);
      setName('');
      setEmail('');
      setPhone('');
      setGuests('2');
      setTime('');
      setSpecialRequests('');
    }, 1500);
  };

  return (
    <section id="reservations" className="py-24 bg-restaurant-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Reservations</h2>
          <p className="section-subtitle">Secure your table for an unforgettable dining experience</p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-10">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input-field"
                placeholder="Your Full Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="input-field"
                placeholder="Your Phone Number"
              />
            </div>
            
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                Number of Guests *
              </label>
              <div className="relative">
                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="input-field appearance-none pr-10"
                >
                  {guestOptions.map((num) => (
                    <option key={num} value={num}>
                      {num} {num === '1' ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
                <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date *
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={`w-full flex items-center justify-between p-3 rounded-md border border-restaurant-200 focus:outline-none focus:ring-2 focus:ring-restaurant-500/30 transition-all duration-300 ${!date ? 'text-muted-foreground' : ''}`}
                  >
                    {date ? format(date, 'PPP') : <span>Select Date</span>}
                    <CalendarIcon className="h-5 w-5 text-gray-500" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time *
              </label>
              <div className="relative">
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="input-field appearance-none pr-10"
                  required
                >
                  <option value="" disabled>Select Time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="special-requests" className="block text-sm font-medium text-gray-700 mb-1">
                Special Requests
              </label>
              <textarea
                id="special-requests"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="input-field min-h-[100px]"
                placeholder="Any allergies, special occasions, or preferences?"
              />
            </div>
            
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary min-w-[200px]"
              >
                {isSubmitting ? 'Submitting...' : 'Request Reservation'}
              </button>
              <p className="mt-4 text-sm text-muted-foreground">
                * Required Fields. We'll contact you to confirm your reservation.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;

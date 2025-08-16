'use client';

import { useState } from 'react';
import { FiMail, FiPhone, FiMessageSquare, FiSend } from 'react-icons/fi';

const ContactSupport = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('technical');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the support request
    console.log({ subject, message, category, priority });
    // Reset form
    setSubject('');
    setMessage('');
    setCategory('technical');
    setPriority('medium');
    // Show success message (would be implemented in a real app)
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="border border-neutral-200 rounded-lg p-3 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
            <FiMail size={18} />
          </div>
          <div>
            <h3 className="font-medium text-sm">Email</h3>
            <p className="text-xs text-neutral-500">soporte@greenroute.com</p>
          </div>
        </div>
        
        <div className="border border-neutral-200 rounded-lg p-3 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-green-100 text-green-600">
            <FiPhone size={18} />
          </div>
          <div>
            <h3 className="font-medium text-sm">Teléfono</h3>
            <p className="text-xs text-neutral-500">+58 212-555-1234</p>
          </div>
        </div>
        
        <div className="border border-neutral-200 rounded-lg p-3 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
            <FiMessageSquare size={18} />
          </div>
          <div>
            <h3 className="font-medium text-sm">Chat en vivo</h3>
            <p className="text-xs text-neutral-500">Lun-Vie, 8am-6pm</p>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4 pt-4 mt-4 border-t border-neutral-200">
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-neutral-700 mb-1">
              Categoría
            </label>
            <select
              id="category"
              className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="technical">Soporte Técnico</option>
              <option value="billing">Facturación</option>
              <option value="feature">Solicitud de Funcionalidad</option>
              <option value="account">Gestión de Cuenta</option>
              <option value="other">Otro</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-neutral-700 mb-1">
              Prioridad
            </label>
            <select
              id="priority"
              className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={4}
            className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <FiSend size={16} />
            <span>Enviar Mensaje</span>
          </button>
        </div>
      </form>
      
      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-800">
        <p className="font-medium mb-1">Tiempo de respuesta</p>
        <p>Nuestro equipo de soporte responde a la mayoría de las consultas en menos de 24 horas laborables.</p>
      </div>
    </div>
  );
};

export default ContactSupport;

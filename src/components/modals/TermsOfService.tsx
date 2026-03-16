import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfService = ({ isOpen, onClose }: TermsOfServiceProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-dark-200 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-dark-700 flex justify-between items-center"
                >
                  <span>Terms of service</span>
                  <button
                    type="button"
                    className="rounded-md text-dark-500 hover:text-dark-700"
                    onClick={onClose}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </Dialog.Title>
                <div className="mt-4 space-y-4 text-dark-700 max-h-[60vh] overflow-y-auto">
                  <section className="space-y-2">
                    <h4 className="font-semibold">1. General</h4>
                    <p className="text-sm">
                      These terms govern the relationship between SportGoods and customers using the online store.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h4 className="font-semibold">2. Account registration</h4>
                    <p className="text-sm">
                      You need a valid email address to create an account, place orders, and manage personal details.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h4 className="font-semibold">3. Orders and payment</h4>
                    <p className="text-sm">
                      All prices are shown in Bulgarian lev and include VAT. Payment can be made using the methods shown at checkout.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h4 className="font-semibold">4. Delivery</h4>
                    <p className="text-sm">
                      Orders are shipped with courier partners. Typical delivery time for in-stock items is 2 to 5 business days.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h4 className="font-semibold">5. Returns and claims</h4>
                    <p className="text-sm">
                      Unused products can be returned within 14 days of delivery in their original condition.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h4 className="font-semibold">6. Personal data</h4>
                    <p className="text-sm">
                      Personal data is processed for account management, checkout, and order updates in line with applicable privacy requirements.
                    </p>
                  </section>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TermsOfService; 

'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle } from 'lucide-react'
import { registerUser } from '@/actions/register'
import { GameButton } from '@/components/ui/GameButton'

import { UserRegistrationSchema, UserRegistrationForm } from '@/lib/schemas'

const schema = UserRegistrationSchema

type FormData = UserRegistrationForm

interface PreRegModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function PreRegModal({ isOpen, onClose }: PreRegModalProps) {
    const [isSuccess, setIsSuccess] = useState(false)
    const [serverError, setServerError] = useState<string | null>(null)

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        setServerError(null)
        const formData = new FormData()
        formData.append('email', data.email)

        const result = await registerUser(null, formData)

        if (result?.success) {
            setIsSuccess(true)
            reset()
        } else {
            setServerError(result?.message || "Something went wrong")
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md relative shadow-2xl shadow-blue-900/20"
                        >
                            <GameButton
                                variant="ghost"
                                onClick={onClose}
                                aria-label="Close modal"
                                className="absolute top-4 right-4 text-slate-400 hover:text-white hover:bg-white/10 p-2 w-auto h-auto rounded-full"
                            >
                                <X size={24} />
                            </GameButton>

                            {isSuccess ? (
                                <div className="text-center py-8">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <CheckCircle className="text-white w-10 h-10" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-white mb-2">You&apos;re Registered!</h3>
                                    <p className="text-slate-300 mb-6">Thank you for joining the Eternal Tower Saga. We&apos;ll notify you when the adventure begins.</p>
                                    <button
                                        onClick={onClose}
                                        className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-1">Pre-Register Now</h3>
                                        <p className="text-slate-400 text-sm">Join thousands of adventurers and unlock exclusive rewards.</p>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                                            <input
                                                {...register('email')}
                                                type="email"
                                                placeholder="adventurer@example.com"
                                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            />
                                            {errors.email && (
                                                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                                            )}
                                        </div>

                                        {serverError && (
                                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
                                                {serverError}
                                            </div>
                                        )}

                                        <GameButton
                                            type="submit"
                                            isLoading={isSubmitting}
                                        >
                                            Join the Saga
                                        </GameButton>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

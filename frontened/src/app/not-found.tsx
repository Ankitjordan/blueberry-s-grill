import Link from "next/link";
import { DirectionalButton } from "@/components/ui/DirectionalButton";

export default function NotFound() {
	return (
		<div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
			<div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black uppercase tracking-tighter leading-none select-none">
					404
				</div>
			</div>

			<div className="relative z-10 max-w-2xl">
				<div className="inline-flex items-center gap-3 text-[#D4AF37] text-xs font-black uppercase tracking-[0.4em] mb-8">
					<span className="h-px w-8 bg-[#D4AF37]" />
					Page Not Found
					<span className="h-px w-8 bg-[#D4AF37]" />
				</div>

				<h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8 text-slate-900">
					LOST IN THE <span className="text-[#D4AF37]">VIBE?</span>
				</h1>

				<p className="text-slate-600 text-lg md:text-xl font-medium mb-12 leading-relaxed">
					It seems the page you&apos;re looking for has wandered off the menu. 
					Let&apos;s get you back to the flavors you love.
				</p>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
					<Link href="/">
						<DirectionalButton variant="primary" className="min-w-[200px]">
							Back to Home
						</DirectionalButton>
					</Link>
					<Link href="/menu">
						<DirectionalButton variant="accent" className="min-w-[200px]">
							Explore Menu
						</DirectionalButton>
					</Link>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-slate-200">
					<div>
						<h3 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-3">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/menu/desserts" className="text-sm text-slate-500 hover:text-[#D4AF37] transition-colors">
									Sweet Finishes
								</Link>
							</li>
							<li>
								<Link href="/locations" className="text-sm text-slate-500 hover:text-[#D4AF37] transition-colors">
									Our Locations
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-3">
							Need Help?
						</h3>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="text-sm text-slate-500 hover:text-[#D4AF37] transition-colors">
									Contact Support
								</Link>
							</li>
							<li>
								<Link href="#" className="text-sm text-slate-500 hover:text-[#D4AF37] transition-colors">
									Reservations
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-black text-xs uppercase tracking-widest text-slate-900 mb-3">
							Follow Us
						</h3>
						<div className="flex justify-center gap-4 text-slate-400">
							<Link href="#" className="hover:text-[#D4AF37] transition-colors">Instagram</Link>
							<Link href="#" className="hover:text-[#D4AF37] transition-colors">Facebook</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

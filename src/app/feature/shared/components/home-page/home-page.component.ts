import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  popularCoins = [
    { name: 'BTC Bitcoin', price: '$92,216.00', change: '+1.82%', changeClass: 'text-success' },
    { name: 'ETH Ethereum', price: '$3,140.44', change: '+2.43%', changeClass: 'text-success' },
    { name: 'BNB BNB', price: '$620.92', change: '+1.01%', changeClass: 'text-success' },
    { name: 'XRP XRP', price: '$1.11', change: '-1.62%', changeClass: 'text-danger' },
    { name: 'SOL Solana', price: '$245.86', change: '+1.24%', changeClass: 'text-success' },
  ];

  // Data for news
  news = [
    'Bitcoin(BTC) Surpasses $92,000 USDT with a 1.98% Increase in 24 Hours',
    'Blockchain Association Urges SEC to Halt Crypto Crackdown',
    'DEXX Temporarily Suspends Trading Following Recent Security Breach',
    'Solana News: Solana Outshines Bitcoin as DEX Trading Volume Hits Record $41 Billion',
  ];

  // Views for Desktop, Lite, and Pro
  views = [
    {
      id: 'desktop',
      label: 'Desktop',
      image: 'assets/images/desktop-view.png',
      title: 'Trade on the go. Anywhere, anytime.',
      description: 'Experience the full functionality of our trading platform.',
    },
    {
      id: 'lite',
      label: 'Lite',
      image: 'assets/images/lite-view.png',
      title: 'Simplified for Everyone.',
      description: 'Lite mode for beginners with essential tools.',
    },
    {
      id: 'pro',
      label: 'Pro',
      image: 'assets/images/pro-view.png',
      title: 'Pro Mode for Advanced Users.',
      description: 'Designed for professional traders with advanced tools.',
    },
  ];

  // Selected view
  selectedView = this.views[0];

  // Change the view
  changeView(viewId: string) {
    this.selectedView = this.views.find((view) => view.id === viewId)!;
  }
}

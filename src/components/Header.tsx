import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from '@/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, ShoppingCart, User, Leaf } from 'lucide-react';
import Logo from '@/assets/eco-vyapaar-logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [signInDialogOpen, setSignInDialogOpen] = useState(false);

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log({ email, phone, password });
    setSignInDialogOpen(false);
    // TODO: Send to backend or authentication service
  };

  const ngos = [
    {
      name: 'Gau Seva Foundation',
      address: '123 Cow Shelter Road, Jaipur, Rajasthan',
      contact: '+91 9876543210',
    },
    {
      name: 'EcoSave Trust',
      address: '54 Eco Lane, Pune, Maharashtra',
      contact: '+91 9988776655',
    },
    {
      name: 'Organic Futures NGO',
      address: '12 Natural Street, Bengaluru, Karnataka',
      contact: '+91 9090909090',
    },
    {
      name: 'Peel to Meal Initiative',
      address: '202 Sustainability Marg, Delhi',
      contact: '+91 9123456780',
    },
  ];

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Categories', href: '#categories' },
    { name: 'Cart', href: '#cart', icon: ShoppingCart },
    { name: 'Account', href: '#account', icon: User },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo and Brand */}
          <div className="flex items-center">
            <a href="/" className="mr-4">
              <img src={Logo} alt="Eco-Vyapaar Logo" className="h-14 w-auto" />
            </a>
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-eco">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-eco bg-clip-text text-transparent">
                Eco-Vyapaar
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-foreground hover:text-eco-primary transition-colors duration-300"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Dialog open={signInDialogOpen} onOpenChange={setSignInDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="eco-outline" size="sm">
                  Sign In
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md rounded-xl">
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-4 text-eco-primary">Sign In</h2>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email ID"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border rounded text-sm"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 border rounded text-sm"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border rounded text-sm"
                    />
                    <Button className="w-full bg-green-600 text-white" onClick={handleSignIn}>
                      Submit
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Donate Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="eco" size="sm">
                  Donate
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-lg">
                <div className="p-4 md:p-6">
                  <h2 className="text-2xl font-bold text-center text-eco-primary mb-2">
                    Donate for a Greener Tomorrow 🌿
                  </h2>
                  <p className="text-sm text-muted-foreground text-center mb-6">
                    Contribute your kitchen waste peels to feed cows, support NGOs, and reduce landfill waste.
                  </p>
                  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                    {ngos.map((ngo, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-border bg-muted/30 p-4 shadow-sm transition hover:shadow-md"
                      >
                        <h3 className="text-lg font-semibold text-eco-primary mb-1">{ngo.name}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{ngo.address}</p>
                        <p className="text-sm text-muted-foreground">
                          📞{' '}
                          <a
                            href={`tel:${ngo.contact}`}
                            className="text-blue-600 hover:underline"
                          >
                            {ngo.contact}
                          </a>
                        </p>
                        <div className="mt-3 flex gap-2">
                          <a
                            href={`https://wa.me/${ngo.contact.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                          >
                            WhatsApp
                          </a>
                          <a
                            href={`https://www.google.com/maps/search/${encodeURIComponent(ngo.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                          >
                            Locate
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Want to list your NGO here? Reach out to us.
                    </p>
                    <Button variant="eco-outline">Partner With Us</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Sheet Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-eco-light transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {Icon && <Icon className="w-5 h-5 text-eco-primary" />}
                      <span className="text-lg">{item.name}</span>
                    </a>
                  );
                })}

                <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                  <Dialog open={signInDialogOpen} onOpenChange={setSignInDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="eco-outline" className="w-full">
                        Sign In
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md rounded-xl">
                      <div className="p-4">
                        <h2 className="text-xl font-bold mb-4 text-eco-primary">Sign In</h2>
                        <div className="space-y-4">
                          <input
                            type="email"
                            placeholder="Email ID"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded text-sm"
                          />
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-3 py-2 border rounded text-sm"
                          />
                          <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded text-sm"
                          />
                          <Button className="w-full bg-green-600 text-white" onClick={handleSignIn}>
                            Submit
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="eco" className="w-full">
                        Donate
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-lg">
                      <div className="p-4 md:p-6">
                        <h2 className="text-2xl font-bold text-center text-eco-primary mb-2">
                          Donate for a Greener Tomorrow 🌿
                        </h2>
                        <p className="text-sm text-muted-foreground text-center mb-6">
                          Contribute your kitchen waste peels to feed cows, support NGOs, and reduce landfill waste.
                        </p>
                        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                          {ngos.map((ngo, idx) => (
                            <div
                              key={idx}
                              className="rounded-xl border border-border bg-muted/30 p-4 shadow-sm transition hover:shadow-md"
                            >
                              <h3 className="text-lg font-semibold text-eco-primary mb-1">{ngo.name}</h3>
                              <p className="text-sm text-muted-foreground mb-1">{ngo.address}</p>
                              <p className="text-sm text-muted-foreground">
                                📞{' '}
                                <a
                                  href={`tel:${ngo.contact}`}
                                  className="text-blue-600 hover:underline"
                                >
                                  {ngo.contact}
                                </a>
                              </p>
                              <div className="mt-3 flex gap-2">
                                <a
                                  href={`https://wa.me/${ngo.contact.replace(/[^0-9]/g, '')}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                                >
                                  WhatsApp
                                </a>
                                <a
                                  href={`https://www.google.com/maps/search/${encodeURIComponent(ngo.address)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                                >
                                  Locate
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 text-center">
                          <p className="text-sm text-muted-foreground mb-2">
                            Want to list your NGO here? Reach out to us.
                          </p>
                          <Button variant="eco-outline">Partner With Us</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

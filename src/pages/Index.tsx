import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Fighter {
  id: number;
  name: string;
  nickname: string;
  record: string;
  division: string;
  rank: number;
  imageUrl: string;
  wins: number;
  losses: number;
  draws: number;
}

interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  mainEvent: string;
  status: 'upcoming' | 'live' | 'completed';
}

const mockFighters: Fighter[] = [
  { id: 1, name: 'Александр Волков', nickname: 'Дракон', record: '35-10-0', division: 'Heavyweight', rank: 1, imageUrl: '/placeholder.svg', wins: 35, losses: 10, draws: 0 },
  { id: 2, name: 'Петр Ян', nickname: 'No Mercy', record: '17-5-0', division: 'Bantamweight', rank: 1, imageUrl: '/placeholder.svg', wins: 17, losses: 5, draws: 0 },
  { id: 3, name: 'Ислам Махачев', nickname: 'Танк', record: '25-1-0', division: 'Lightweight', rank: 1, imageUrl: '/placeholder.svg', wins: 25, losses: 1, draws: 0 },
  { id: 4, name: 'Хабиб Нурмагомедов', nickname: 'Орёл', record: '29-0-0', division: 'Lightweight', rank: 1, imageUrl: '/placeholder.svg', wins: 29, losses: 0, draws: 0 },
];

const mockEvents: Event[] = [
  { id: 1, name: 'UFC 300', date: '2024-12-15', location: 'Las Vegas', mainEvent: 'Волков vs. Аспиналл', status: 'upcoming' },
  { id: 2, name: 'UFC 301', date: '2024-12-22', location: 'Abu Dhabi', mainEvent: 'Ян vs. О\'Мэлли', status: 'upcoming' },
  { id: 3, name: 'UFC 299', date: '2024-11-20', location: 'New York', mainEvent: 'Махачев vs. Оливейра 2', status: 'completed' },
];

function Index() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Award" className="text-primary" size={32} />
              <h1 className="text-3xl font-bold text-primary text-glow-red">UFC FIGHTERS</h1>
            </div>
            <div className="flex space-x-1">
              <Button 
                variant={activeTab === 'home' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('home')}
                className="font-bold"
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button 
                variant={activeTab === 'fighters' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('fighters')}
                className="font-bold"
              >
                <Icon name="Users" size={18} className="mr-2" />
                Бойцы
              </Button>
              <Button 
                variant={activeTab === 'events' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('events')}
                className="font-bold"
              >
                <Icon name="Calendar" size={18} className="mr-2" />
                Турниры
              </Button>
              <Button 
                variant={activeTab === 'p4p' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('p4p')}
                className="font-bold"
              >
                <Icon name="Trophy" size={18} className="mr-2" />
                P4P
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary/20 via-primary/10 to-background border border-primary/30 p-12 text-center">
              <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center" />
              <div className="relative z-10">
                <h2 className="text-6xl font-bold mb-4 text-glow-red">ДОБРО ПОЖАЛОВАТЬ В ОКТАГОН</h2>
                <p className="text-xl text-muted-foreground mb-8">Статистика. Рейтинги. Турниры.</p>
                <div className="flex justify-center gap-4">
                  <Button size="lg" className="text-lg px-8 border-glow">
                    <Icon name="Upload" size={20} className="mr-2" />
                    Загрузить бойца
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Icon name="BarChart3" size={20} className="mr-2" />
                    Статистика
                  </Button>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-bold mb-6 flex items-center">
                <Icon name="TrendingUp" className="mr-3 text-secondary" size={32} />
                Ключевая статистика
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{mockFighters.length}</div>
                    <div className="text-muted-foreground">Всего бойцов</div>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">{mockEvents.filter(e => e.status === 'upcoming').length}</div>
                    <div className="text-muted-foreground">Предстоящих турниров</div>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">8</div>
                    <div className="text-muted-foreground">Весовых категорий</div>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">156</div>
                    <div className="text-muted-foreground">Проведено боёв</div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-bold mb-6 flex items-center">
                <Icon name="Flame" className="mr-3 text-primary" size={32} />
                Ближайшие бои
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockEvents.filter(e => e.status === 'upcoming').slice(0, 2).map((event) => (
                  <Card key={event.id} className="bg-card border-border hover:border-primary/50 transition-all hover:scale-[1.02]">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-primary text-primary-foreground">{event.status === 'upcoming' ? 'Скоро' : 'Завершён'}</Badge>
                      <h4 className="text-2xl font-bold mb-2">{event.name}</h4>
                      <p className="text-lg text-primary mb-2">{event.mainEvent}</p>
                      <div className="flex items-center text-muted-foreground text-sm space-x-4">
                        <span className="flex items-center">
                          <Icon name="Calendar" size={16} className="mr-1" />
                          {new Date(event.date).toLocaleDateString('ru-RU')}
                        </span>
                        <span className="flex items-center">
                          <Icon name="MapPin" size={16} className="mr-1" />
                          {event.location}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'fighters' && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold text-glow-red">БОЙЦЫ</h2>
              <Button className="border-glow">
                <Icon name="UserPlus" size={18} className="mr-2" />
                Добавить бойца
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockFighters.map((fighter) => (
                <Card key={fighter.id} className="bg-card border-border hover:border-primary/50 transition-all hover:scale-[1.02] overflow-hidden">
                  <div className="h-64 bg-muted relative overflow-hidden">
                    <img src={fighter.imageUrl} alt={fighter.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-secondary text-secondary-foreground text-lg font-bold">#{fighter.rank}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-1">{fighter.name}</h3>
                    <p className="text-primary italic mb-3">"{fighter.nickname}"</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Категория:</span>
                        <span className="font-bold">{fighter.division}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Рекорд:</span>
                        <span className="font-bold text-primary">{fighter.record}</span>
                      </div>
                      <div className="flex gap-4 pt-2 border-t border-border">
                        <div className="text-center flex-1">
                          <div className="text-xl font-bold text-green-500">{fighter.wins}</div>
                          <div className="text-xs text-muted-foreground">Побед</div>
                        </div>
                        <div className="text-center flex-1">
                          <div className="text-xl font-bold text-red-500">{fighter.losses}</div>
                          <div className="text-xs text-muted-foreground">Поражений</div>
                        </div>
                        <div className="text-center flex-1">
                          <div className="text-xl font-bold text-yellow-500">{fighter.draws}</div>
                          <div className="text-xs text-muted-foreground">Ничьих</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold text-glow-red">ТУРНИРЫ</h2>
              <Button className="border-glow">
                <Icon name="Plus" size={18} className="mr-2" />
                Создать турнир
              </Button>
            </div>
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="upcoming" className="text-lg">
                  <Icon name="Clock" size={18} className="mr-2" />
                  Предстоящие
                </TabsTrigger>
                <TabsTrigger value="completed" className="text-lg">
                  <Icon name="CheckCircle" size={18} className="mr-2" />
                  Завершённые
                </TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming">
                <div className="space-y-4">
                  {mockEvents.filter(e => e.status === 'upcoming').map((event) => (
                    <Card key={event.id} className="bg-card border-border hover:border-primary/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="text-3xl font-bold">{event.name}</h3>
                              <Badge className="bg-primary text-primary-foreground animate-pulse-glow">LIVE SOON</Badge>
                            </div>
                            <p className="text-xl text-primary mb-4">{event.mainEvent}</p>
                            <div className="flex items-center space-x-6 text-muted-foreground">
                              <span className="flex items-center">
                                <Icon name="Calendar" size={18} className="mr-2" />
                                {new Date(event.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                              </span>
                              <span className="flex items-center">
                                <Icon name="MapPin" size={18} className="mr-2" />
                                {event.location}
                              </span>
                            </div>
                          </div>
                          <Button variant="outline">
                            <Icon name="Eye" size={18} className="mr-2" />
                            Подробнее
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="completed">
                <div className="space-y-4">
                  {mockEvents.filter(e => e.status === 'completed').map((event) => (
                    <Card key={event.id} className="bg-card border-border hover:border-primary/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="text-3xl font-bold">{event.name}</h3>
                              <Badge variant="outline">Завершён</Badge>
                            </div>
                            <p className="text-xl text-primary mb-4">{event.mainEvent}</p>
                            <div className="flex items-center space-x-6 text-muted-foreground">
                              <span className="flex items-center">
                                <Icon name="Calendar" size={18} className="mr-2" />
                                {new Date(event.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                              </span>
                              <span className="flex items-center">
                                <Icon name="MapPin" size={18} className="mr-2" />
                                {event.location}
                              </span>
                            </div>
                          </div>
                          <Button variant="outline">
                            <Icon name="FileText" size={18} className="mr-2" />
                            Результаты
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeTab === 'p4p' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-2 text-glow-gold flex items-center">
              <Icon name="Crown" className="mr-3 text-secondary" size={40} />
              POUND-FOR-POUND РЕЙТИНГ
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">Лучшие бойцы независимо от весовой категории</p>
            <div className="space-y-4">
              {mockFighters.map((fighter, index) => (
                <Card key={fighter.id} className="bg-card border-border hover:border-secondary/50 transition-all hover:scale-[1.01]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="text-6xl font-bold text-secondary w-20 text-center text-glow-gold">
                        {index + 1}
                      </div>
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-secondary">
                        <img src={fighter.imageUrl} alt={fighter.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-1">{fighter.name}</h3>
                        <p className="text-primary italic mb-2">"{fighter.nickname}"</p>
                        <div className="flex gap-4 text-sm">
                          <span className="text-muted-foreground">Категория: <span className="text-foreground font-bold">{fighter.division}</span></span>
                          <span className="text-muted-foreground">Рекорд: <span className="text-primary font-bold">{fighter.record}</span></span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-secondary mb-1">
                          {(Math.random() * 10 + 90).toFixed(1)}
                        </div>
                        <div className="text-sm text-muted-foreground">Рейтинг</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-lg">© 2024 UFC Fighters Database. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;

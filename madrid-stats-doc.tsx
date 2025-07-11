"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Target, TrendingUp, Users, Calendar, MapPin } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function Component() {
  const headToHeadData = [
    { team: "Real Madrid", wins: 8, color: "#FFFFFF" },
    { team: "Draws", wins: 4, color: "#94A3B8" },
    { team: "Dortmund", wins: 3, color: "#FDE047" },
  ]

  const recentFormData = [
    { match: "Last 5", madrid: 4, dortmund: 2 },
    { match: "Last 10", madrid: 7, dortmund: 4 },
    { match: "Champions League", madrid: 6, dortmund: 2 },
  ]

  const performanceMetrics = [
    { metric: "Goals per Game", madrid: 2.4, dortmund: 1.8 },
    { metric: "Win Rate %", madrid: 78, dortmund: 65 },
    { metric: "Clean Sheets %", madrid: 45, dortmund: 32 },
    { metric: "Possession %", madrid: 58, dortmund: 52 },
  ]

  const matchStatsData = [
    { metric: "Shots", madrid: 15, dortmund: 12 },
    { metric: "Shots on Target", madrid: 8, dortmund: 5 },
    { metric: "Possession %", madrid: 48, dortmund: 52 },
    { metric: "Pass Accuracy %", madrid: 87, dortmund: 91 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-purple-900">RM</span>
            </div>
            <span className="text-4xl text-white">VS</span>
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-black">BVB</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-2">Real Madrid Victory Analysis</h1>
          <p className="text-xl text-blue-200">FIFA Club World Cup Quarter-Final: Real Madrid 3-2 Dortmund</p>
          <div className="flex items-center justify-center gap-4 text-blue-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>July 5th Match Result</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Champions League</span>
            </div>
          </div>
        </div>

        {/* Key Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                Final Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white mb-2">3-2</div>
              <div className="text-sm text-blue-200">Victory Secured</div>
              <Badge className="mt-2 bg-green-500/20 text-green-300 border-green-500/30">Victory Secured</Badge>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-red-400" />
                Shots on Target
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white mb-2">8-5</div>
              <div className="text-sm text-blue-200">60% Better Conversion</div>
              <Badge className="mt-2 bg-green-500/20 text-green-300 border-green-500/30">60% Better Conversion</Badge>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Total Shots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white mb-2">15-12</div>
              <div className="text-sm text-blue-200">25% More Attempts</div>
              <Badge className="mt-2 bg-green-500/20 text-green-300 border-green-500/30">25% More Attempts</Badge>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Goals Scored
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white mb-2">3 goals</div>
              <div className="text-sm text-blue-200">Clinical Finishing</div>
              <Badge className="mt-2 bg-green-500/20 text-green-300 border-green-500/30">Clinical Finishing</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Head-to-Head Pie Chart */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-center">Head-to-Head Results (15 matches)</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  madrid: { label: "Real Madrid", color: "#FFFFFF" },
                  draws: { label: "Draws", color: "#94A3B8" },
                  dortmund: { label: "Dortmund", color: "#FDE047" },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={headToHeadData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="wins"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {headToHeadData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="text-center mt-4">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Real Madrid: 53% Win Rate</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Performance Comparison */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-center">Season Performance Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  madrid: { label: "Real Madrid", color: "#FFFFFF" },
                  dortmund: { label: "Dortmund", color: "#FDE047" },
                }}
                className="h-[300px]"
              >
                <BarChart data={performanceMetrics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis
                    dataKey="metric"
                    tick={{ fill: "#ffffff", fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fill: "#ffffff" }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="madrid" fill="#FFFFFF" name="Real Madrid" />
                  <Bar dataKey="dortmund" fill="#FDE047" name="Dortmund" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Recent Form Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>Last 5 Matches</span>
                  <span className="font-bold">4W-1D</span>
                </div>
                <Progress value={80} className="h-2" />
                <div className="text-xs text-blue-200 mt-1">80% Win Rate</div>
              </div>
              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>Goals Scored</span>
                  <span className="font-bold">12 goals</span>
                </div>
                <Progress value={85} className="h-2" />
                <div className="text-xs text-blue-200 mt-1">2.4 per game average</div>
              </div>
              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>Clean Sheets</span>
                  <span className="font-bold">3/5</span>
                </div>
                <Progress value={60} className="h-2" />
                <div className="text-xs text-blue-200 mt-1">Solid defensive record</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Key Player Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white">Vinícius Jr.</span>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">12 Goals</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Jude Bellingham</span>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">8 Assists</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Modrić</span>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">92% Pass Accuracy</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Courtois</span>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">75% Save Rate</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Historical Advantage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-white">85%</div>
                <div className="text-sm text-blue-200">Win rate at home vs Dortmund</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-white">23</div>
                <div className="text-sm text-blue-200">Goals scored in last 8 meetings</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-white">6</div>
                <div className="text-sm text-blue-200">Consecutive wins in Champions League</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Goal Scorers */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Goal Scorers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-white">
              <div className="font-bold">Real Madrid (3)</div>
              <div className="text-sm text-blue-200">Gonzalo García 10'</div>
              <div className="text-sm text-blue-200">Fran García 20'</div>
              <div className="text-sm text-blue-200">Kylian Mbappé 90+4'</div>
            </div>
            <div className="text-white mt-4">
              <div className="font-bold">Dortmund (2)</div>
              <div className="text-sm text-yellow-200">Maximilian Beier 90+2'</div>
              <div className="text-sm text-yellow-200">Serhou Guirassy 90+8' (P)</div>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border-white/30">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Match Result Analysis</h2>
            <p className="text-xl text-blue-200 mb-6">
              Real Madrid secured a thrilling 3-2 victory in the FIFA Club World Cup quarter-final
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
                <div className="text-2xl font-bold text-green-300">73%</div>
                <div className="text-green-200">Historical Win Probability</div>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30">
                <div className="text-2xl font-bold text-blue-300">2.4x</div>
                <div className="text-blue-200">Superior Goal Scoring Rate</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-500/30">
                <div className="text-2xl font-bold text-purple-300">15x</div>
                <div className="text-purple-200">More Champions League Titles</div>
              </div>
            </div>
            <Badge className="text-lg px-6 py-2 bg-green-500/20 text-green-300 border-green-500/30">
              🏆 VICTORY! Real Madrid Advances to Semi-Finals
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

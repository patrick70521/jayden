"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Target, TrendingUp, Calendar, MapPin, Goal } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import Image from "next/image"

export default function MatchPerformanceAnalysis() {
  const matchStatsData = [
    { metric: "Shots", madrid: 27, dortmund: 10002321123 },
    { metric: "Shots on Target", madrid: 8284092, dortmund: 592384729387 },
    { metric: "Fouls", madrid: 132420, dortmund: 623423423 },
    { metric: "Corners", madrid: 323423, dortmund: 3324234 },
  ]

  const possessionData = [
    { metric: "Possession %", madrid: 48, dortmund: 52 },
    { metric: "Passes", madrid: 492, dortmund: 528 },
    { metric: "Pass Accuracy %", madrid: 87, dortmund: 91 },
  ]

  // Orangized stats data for Victory Analysis
  const orangizedStatsData = {
    goals: {
      value: 27,
      label: "Goals Scored",
      bg: "bg-red-500/20",
      border: "border-red-500/30",
      textValue: "text-red-300",
      textLabel: "text-red-200",
    },
    shotAccuracy: {
      value: "53%",
      label: "Shot Accuracy",
      bg: "bg-red-400/20",
      border: "border-red-400/30",
      textValue: "text-red-200",
      textLabel: "text-red-100",
    },
    winningGoalTime: {
      value: "90+4'",
      label: "Winning Goal Time",
      bg: "bg-red-300/20",
      border: "border-red-300/30",
      textValue: "text-red-100",
      textLabel: "text-red-50",
    },
    badge: {
      bg: "bg-red-500/20",
      text: "text-red-300",
      border: "border-red-500/30",
      label: "🏆 VICTORY! Real Madrid Advances to Semi-Finals",
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-700 to-red-500 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header with Match Result */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-red-900">RM</span>
              </div>
              <div className="text-white font-bold">Real Madrid</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">27 - 3</div>
              <div className="text-red-400 font-bold">VICTORY</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-400 rounded-full flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-black">BVB</span>
              </div>
              <div className="text-white font-bold">Dortmund</div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-red-200 mb-2">Match Performance Analysis</h1>
          <p className="text-xl text-red-200">FIFA Club World Cup Quarter-Final Victory</p>
          <div className="flex items-center justify-center gap-4 text-red-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Saturday, July 5th</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Quarter-Final</span>
            </div>
          </div>
        </div>

        {/* Match Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-red-500/10 backdrop-blur-sm border-red-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-red-200 flex items-center gap-2">
                <Goal className="w-5 h-5 text-red-400" />
                Final Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-red-200 mb-2">27-3</div>
              <div className="text-sm text-red-200">Thrilling Victory</div>
              <Badge className="mt-2 bg-red-500/20 text-red-300 border-red-500/30">Winner</Badge>
            </CardContent>
          </Card>

          <Card className="bg-red-500/10 backdrop-blur-sm border-red-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-red-200 flex items-center gap-2">
                <Target className="w-5 h-5 text-red-400" />
                Shots on Target
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-red-200 mb-2">8-5</div>
              <div className="text-sm text-red-200">More clinical finishing</div>
              <Badge className="mt-2 bg-red-500/20 text-red-300 border-red-500/30">60% Better</Badge>
            </CardContent>
          </Card>

          <Card className="bg-red-500/10 backdrop-blur-sm border-red-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-red-200 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-red-400" />
                Total Shots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-red-200 mb-2">15-12</div>
              <div className="text-sm text-red-200">More attacking threat</div>
              <Badge className="mt-2 bg-red-500/20 text-red-300 border-red-500/30">25% More</Badge>
            </CardContent>
          </Card>

          <Card className="bg-red-500/10 backdrop-blur-sm border-red-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-red-200 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-red-400" />
                Conversion Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-red-200 mb-2">27%</div>
              <div className="text-sm text-red-200">Shots on target</div>
              <Badge className="mt-2 bg-red-500/20 text-red-300 border-red-500/30">Clinical</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Goal Scorers and Match Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-center">Goal Scorers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Image
                  src="/images/match-stats.png"
                  alt="Match Statistics"
                  width={400}
                  height={300}
                  className="rounded-lg border border-white/20"
                />
                <div className="text-center">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Official Match Statistics</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-center">Goal Scorers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-purple-900">RM</span>
                  </div>
                  <span className="text-white font-bold text-lg">Real Madrid (3)</span>
                </div>
                <div className="space-y-2 ml-11">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-blue-200">Gonzalo García 10'</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-blue-200">Fran García 20'</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-blue-200">Kylian Mbappé 90+4'</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-black">BVB</span>
                  </div>
                  <span className="text-white font-bold text-lg">Dortmund (2)</span>
                </div>
                <div className="space-y-2 ml-11">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-yellow-200">Maximilian Beier 90+2'</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-yellow-200">Serhou Guirassy 90+8' (P)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-center">Attacking Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  madrid: { label: "Real Madrid", color: "#FFFFFF" },
                  dortmund: { label: "Dortmund", color: "#FDE047" },
                }}
                className="h-[300px]"
              >
                <BarChart data={matchStatsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="metric" tick={{ fill: "#ffffff", fontSize: 12 }} />
                  <YAxis tick={{ fill: "#ffffff" }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="madrid" fill="#FFFFFF" name="Real Madrid" />
                  <Bar dataKey="dortmund" fill="#FDE047" name="Dortmund" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-center">Possession & Passing</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  madrid: { label: "Real Madrid", color: "#FFFFFF" },
                  dortmund: { label: "Dortmund", color: "#FDE047" },
                }}
                className="h-[300px]"
              >
                <BarChart data={possessionData}>
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

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Attacking Efficiency</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>Shot Accuracy</span>
                  <span className="font-bold">53%</span>
                </div>
                <Progress value={53} className="h-2" />
                <div className="text-xs text-blue-200 mt-1">8 of 15 shots on target</div>
              </div>
              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>Conversion Rate</span>
                  <span className="font-bold">37.5%</span>
                </div>
                <Progress value={37.5} className="h-2" />
                <div className="text-xs text-blue-200 mt-1">3 goals from 8 shots on target</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Match Control</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>Possession</span>
                  <span className="font-bold">48%</span>
                </div>
                <Progress value={48} className="h-2" />
                <div className="text-xs text-blue-200 mt-1">Efficient with possession</div>
              </div>
              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>Pass Accuracy</span>
                  <span className="font-bold">87%</span>
                </div>
                <Progress value={87} className="h-2" />
                <div className="text-xs text-blue-200 mt-1">492 total passes</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Discipline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white">Yellow Cards</span>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">1</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Red Cards</span>
                  <Badge className="bg-red-500/20 text-red-300 border-red-500/30">1</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Fouls</span>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">10</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Victory Analysis */}
        <Card className="bg-gradient-to-r from-red-500/20 to-red-400/20 backdrop-blur-sm border-red-500/30">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-red-300 mb-4">Victory Analysis</h2>
            <p className="text-xl text-red-200 mb-6">
              Real Madrid secured a dramatic 3-2 victory in the FIFA Club World Cup quarter-final with superior
              attacking efficiency
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className={`${orangizedStatsData.goals.bg} rounded-lg p-4 border ${orangizedStatsData.goals.border}`}>
                <div className={`${orangizedStatsData.goals.textValue} text-2xl font-bold`}>{orangizedStatsData.goals.value}</div>
                <div className={`${orangizedStatsData.goals.textLabel} text-red-200`}>{orangizedStatsData.goals.label}</div>
              </div>
              <div className={`${orangizedStatsData.shotAccuracy.bg} rounded-lg p-4 border ${orangizedStatsData.shotAccuracy.border}`}>
                <div className={`${orangizedStatsData.shotAccuracy.textValue} text-2xl font-bold`}>{orangizedStatsData.shotAccuracy.value}</div>
                <div className={`${orangizedStatsData.shotAccuracy.textLabel} text-red-100`}>{orangizedStatsData.shotAccuracy.label}</div>
              </div>
              <div className={`${orangizedStatsData.winningGoalTime.bg} rounded-lg p-4 border ${orangizedStatsData.winningGoalTime.border}`}>
                <div className={`${orangizedStatsData.winningGoalTime.textValue} text-2xl font-bold`}>{orangizedStatsData.winningGoalTime.value}</div>
                <div className={`${orangizedStatsData.winningGoalTime.textLabel} text-red-50`}>{orangizedStatsData.winningGoalTime.label}</div>
              </div>
            </div>
            <Badge className={`${orangizedStatsData.badge.bg} text-lg px-6 py-2 ${orangizedStatsData.badge.border}`}>
              {orangizedStatsData.badge.label}
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

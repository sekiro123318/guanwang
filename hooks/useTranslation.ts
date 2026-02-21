import { useLanguage } from '@/contexts/LanguageContext'

interface TranslationData {
  [key: string]: string | TranslationData
}

// 同步导入翻译文件
const enTranslations: TranslationData = {
  "common": {
    "home": "Home",
    "technology": "Technology",
    "pipeline": "Pipeline",
    "contact": "Contact",
    "learnMore": "Learn More",
    "viewDetails": "View Details",
    "explore": "Explore",
    "getStarted": "Get Started"
  },
  "navbar": {
    "brand": "angelpro"
  },
  "hero": {
    "tagline": "AI-Powered Drug Discovery",
    "title": "AI-Driven Drug Discovery Across Small Molecules, Peptides & TCM",
    "description": "Integrating computational biology and machine learning to accelerate breakthrough therapies from discovery to IND",
    "technologyButton": "Explore Technology",
    "pipelineButton": "View Pipeline"
  },
  "valueProps": {
    "title": "Why Choose AngelPro",
    "items": {
      "ai": {
        "title": "AI-Driven Discovery",
        "description": "Leverage machine learning to identify novel drug candidates with higher success rates"
      },
      "speed": {
        "title": "Accelerated Timelines",
        "description": "Reduce discovery timelines by 50% compared to traditional methods"
      },
      "platform": {
        "title": "Integrated Platform",
        "description": "End-to-end platform covering small molecules, peptides, and traditional medicine"
      },
      "expertise": {
        "title": "Domain Expertise",
        "description": "Team of computational biologists, medicinal chemists, and AI specialists"
      }
    }
  },
  "platforms": {
    "title": "Our Technology Platforms",
    "smallMolecules": {
      "title": "Small Molecules Platform",
      "description": "AI-driven discovery of novel small molecule therapeutics"
    },
    "peptides": {
      "title": "Peptides Platform",
      "description": "Computational design of peptide-based therapeutics"
    },
    "tcm": {
      "title": "Traditional Chinese Medicine",
      "description": "Modernizing traditional medicine through AI analysis"
    }
  },
  "footer": {
    "company": "Company",
    "technology": "Technology",
    "resources": "Resources",
    "contact": "Contact",
    "rights": "All rights reserved."
  }
}

const zhTranslations: TranslationData = {
  "common": {
    "home": "首页",
    "technology": "技术平台",
    "pipeline": "研发管线",
    "contact": "联系我们",
    "learnMore": "了解更多",
    "viewDetails": "查看详情",
    "explore": "探索",
    "getStarted": "开始使用"
  },
  "navbar": {
    "brand": "angelpro"
  },
  "hero": {
    "tagline": "AI驱动的药物发现",
    "title": "AI驱动的小分子、多肽和中药药物发现",
    "description": "整合计算生物学和机器学习，从药物发现到IND申报，加速突破性疗法的开发",
    "technologyButton": "探索技术平台",
    "pipelineButton": "查看研发管线"
  },
  "valueProps": {
    "title": "为什么选择AngelPro",
    "items": {
      "ai": {
        "title": "AI驱动发现",
        "description": "利用机器学习识别具有更高成功率的创新候选药物"
      },
      "speed": {
        "title": "加速时间线",
        "description": "与传统方法相比，将发现时间缩短50%"
      },
      "platform": {
        "title": "集成平台",
        "description": "端到端平台覆盖小分子、多肽和传统药物"
      },
      "expertise": {
        "title": "领域专业知识",
        "description": "计算生物学家、药物化学家和AI专家的专业团队"
      }
    }
  },
  "platforms": {
    "title": "我们的技术平台",
    "smallMolecules": {
      "title": "小分子药物平台",
      "description": "AI驱动的新型小分子治疗药物发现"
    },
    "peptides": {
      "title": "多肽药物平台",
      "description": "基于多肽的治疗药物的计算设计"
    },
    "tcm": {
      "title": "中药现代化平台",
      "description": "通过AI分析实现传统中药现代化"
    }
  },
  "footer": {
    "company": "公司",
    "technology": "技术",
    "resources": "资源",
    "contact": "联系",
    "rights": "保留所有权利。"
  }
}

const translations: Record<string, TranslationData> = {
  en: enTranslations,
  zh: zhTranslations
}

export function useTranslation() {
  const { locale } = useLanguage()
  
  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split('.')
    let value: any = translations[locale] || {}
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    
    if (typeof value === 'string') {
      let result = value
      if (params) {
        Object.keys(params).forEach(paramKey => {
          result = result.replace(`{{${paramKey}}}`, params[paramKey])
        })
      }
      return result
    }
    
    return key
  }
  
  return { t, locale }
}
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

import matplotlib.pyplot as plt
import numpy as np

def make_chart(out_path: str) -> None:
    # Data extracted from the article context
    categories = [
        "Under-specified Scope",
        "Optimistic Cutover Assumptions",
        "Testing Schedule Compression",
        "BABA and Davis-Bacon Premiums",
        "ISA and SSO Timeline",
        "Site-specific Configuration",
        "Training and OPEX Ramp"
    ]
    
    # Approximate / illustrative cost growth percentages
    cost_growth = [20, 15, 10, 10, 5, 5, 5]  # These are illustrative values

    # Plot configuration
    fig, ax = plt.subplots(figsize=(10, 5.5), dpi=140)
    fig.patch.set_facecolor("#F4EFE6")
    ax.set_facecolor("#F4EFE6")
    
    # Bar chart
    bars = ax.bar(categories, cost_growth, color="#0A1628", edgecolor="#D4A84B")
    
    # Title and labels
    ax.set_title("Typical US CBTC Project Cost Growth by Driver Category", color="#0A1628", fontweight='bold')
    ax.set_xlabel("Driver Category", color="#0A1628")
    ax.set_ylabel("Cost Growth (%)", color="#0A1628")
    
    # Gridlines
    ax.yaxis.grid(True, color="#D4A84B", linestyle='--', linewidth=0.7)
    
    # Rotate x-axis labels for better readability
    plt.xticks(rotation=45, ha='right')
    
    # Tight layout
    plt.tight_layout()
    
    # Save the figure
    plt.savefig(out_path, facecolor="#F4EFE6", bbox_inches='tight')
    plt.close()

import sys
if __name__ == '__main__':
    make_chart(sys.argv[1])

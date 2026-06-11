import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

import matplotlib.pyplot as plt

def make_chart(out_path: str) -> None:
    # Data extracted from the article context
    categories = [
        "Processor & Firmware",
        "Radio Modem",
        "Sensors",
        "DMI",
        "Integration Engineering"
    ]
    # Approximate ranges for new uniform fleets
    new_fleet_costs = [100, 20, 30, 37.5, 50]  # in thousands
    # Approximate ranges for aged retrofit fleets
    aged_fleet_costs = [120, 25, 40, 50, 150]  # in thousands

    # Plotting
    fig, ax = plt.subplots(figsize=(10, 5.5), dpi=140)
    bar_width = 0.35
    index = range(len(categories))

    # Bars
    ax.bar(index, new_fleet_costs, bar_width, label='New Fleet', color="#0A1628")
    ax.bar([i + bar_width for i in index], aged_fleet_costs, bar_width, label='Aged Retrofit Fleet', color="#D4A84B")

    # Title and labels
    ax.set_title('Per-VOBC Cost Components by Fleet Type', fontsize=14, fontweight='bold', color="#0A1628")
    ax.set_xlabel('Cost Components', fontsize=12, color="#1A1A1A")
    ax.set_ylabel('Cost (in thousands of USD)', fontsize=12, color="#1A1A1A")
    ax.set_xticks([i + bar_width / 2 for i in index])
    ax.set_xticklabels(categories, rotation=45, ha='right', fontsize=10, color="#1A1A1A")
    ax.legend(loc='upper left', fontsize=10)

    # Grid and layout
    ax.grid(True, which='both', linestyle='--', linewidth=0.5, color="#1A1A1A", alpha=0.7)
    plt.tight_layout()

    # Save the figure
    plt.savefig(out_path, facecolor="#F4EFE6", bbox_inches='tight')
    plt.close()

import sys
if __name__ == '__main__':
    make_chart(sys.argv[1])
